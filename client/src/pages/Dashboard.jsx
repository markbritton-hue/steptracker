import { useState, useEffect } from 'react';
import { collection, doc, setDoc, deleteDoc, query, where, orderBy, limit, getDocs, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{typeof value === 'number' ? value.toLocaleString() : value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

export default function Dashboard() {
  const user = auth.currentUser;
  const [entries, setEntries] = useState([]);
  const [stats, setStats] = useState({ today: 0, week: 0, month: 0, rank: 1 });
  const [form, setForm] = useState({ date: new Date().toISOString().split('T')[0], steps: '' });
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  async function loadData() {
    if (!user) return;

    // Load recent entries
    const q = query(
      collection(db, 'stepEntries'),
      where('userId', '==', user.uid),
      orderBy('date', 'desc'),
      limit(90)
    );
    const snap = await getDocs(q);
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    setEntries(data);

    // Compute stats
    const today = new Date().toISOString().split('T')[0];
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
    const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];

    const todayEntry = data.find(e => e.date === today);
    const weekTotal = data.filter(e => e.date >= weekAgo).reduce((s, e) => s + e.steps, 0);
    const monthTotal = data.filter(e => e.date >= monthStart).reduce((s, e) => s + e.steps, 0);

    // Compute rank — get all users' month totals
    const allQ = query(collection(db, 'stepEntries'), where('date', '>=', monthStart));
    const allSnap = await getDocs(allQ);
    const totals = {};
    allSnap.docs.forEach(d => {
      const { userId, steps } = d.data();
      totals[userId] = (totals[userId] || 0) + steps;
    });
    const myTotal = totals[user.uid] || 0;
    const rank = Object.values(totals).filter(t => t > myTotal).length + 1;

    setStats({ today: todayEntry?.steps ?? 0, week: weekTotal, month: monthTotal, rank });
  }

  useEffect(() => { loadData(); }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg('');
    setError('');
    try {
      const docId = `${user.uid}_${form.date}`;
      await setDoc(doc(db, 'stepEntries', docId), {
        userId: user.uid,
        date: form.date,
        steps: parseInt(form.steps),
        updatedAt: new Date().toISOString(),
      });
      setMsg('Steps saved!');
      setForm({ ...form, steps: '' });
      loadData();
    } catch (err) {
      setError('Failed to save steps. Try again.');
    }
  }

  async function deleteEntry(id) {
    if (!confirm('Delete this entry?')) return;
    await deleteDoc(doc(db, 'stepEntries', id));
    loadData();
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Dashboard</h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Today" value={stats.today} sub="steps" />
        <StatCard label="This Week" value={stats.week} sub="steps" />
        <StatCard label="This Month" value={stats.month} sub="steps" />
        <StatCard label="My Rank" value={`#${stats.rank}`} sub="this month" />
      </div>

      {/* Log Steps */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Log Steps</h3>
        {msg && <div className="mb-3 p-2 bg-green-50 text-green-700 rounded text-sm">{msg}</div>}
        {error && <div className="mb-3 p-2 bg-red-50 text-red-700 rounded text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              value={form.date}
              max={new Date().toISOString().split('T')[0]}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Steps</label>
            <input
              type="number"
              required
              min="0"
              max="100000"
              value={form.steps}
              onChange={(e) => setForm({ ...form, steps: e.target.value })}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="e.g. 8500"
            />
          </div>
          <button
            type="submit"
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm w-full sm:w-auto"
          >
            Save
          </button>
        </form>
      </div>

      {/* Step History */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold">Recent Entries</h3>
        </div>
        {entries.length === 0 ? (
          <p className="px-6 py-8 text-center text-gray-400">No steps logged yet. Start tracking!</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Date</th>
                <th className="text-right px-6 py-3 text-gray-500 font-medium">Steps</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {entries.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-700">{e.date}</td>
                  <td className="px-6 py-3 text-right font-semibold text-gray-900">{e.steps.toLocaleString()}</td>
                  <td className="px-6 py-3 text-right">
                    <button onClick={() => deleteEntry(e.id)} className="text-xs text-red-400 hover:text-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
