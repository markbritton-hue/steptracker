import { useState, useEffect } from 'react';
import { collection, doc, setDoc, deleteDoc, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

function StatCard({ label, value }) {
  return (
    <div className="rounded-lg p-3" style={{ background: '#1a1d27', border: '1px solid #2d3148' }}>
      <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{label}</p>
      <p className="text-xl font-bold text-white mt-1">{typeof value === 'number' ? value.toLocaleString() : value}</p>
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
    const q = query(collection(db, 'stepEntries'), where('userId', '==', user.uid), orderBy('date', 'desc'), limit(90));
    const snap = await getDocs(q);
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    setEntries(data);

    const today = new Date().toISOString().split('T')[0];
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
    const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];

    const todayEntry = data.find(e => e.date === today);
    const weekTotal = data.filter(e => e.date >= weekAgo).reduce((s, e) => s + e.steps, 0);
    const monthTotal = data.filter(e => e.date >= monthStart).reduce((s, e) => s + e.steps, 0);

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
      const existing = entries.find(e => e.date === form.date);
      if (existing) {
        if (!confirm(`You already logged ${existing.steps.toLocaleString()} steps on ${form.date}. Replace with ${parseInt(form.steps).toLocaleString()}?`)) return;
      }
      await setDoc(doc(db, 'stepEntries', docId), {
        userId: user.uid,
        date: form.date,
        steps: parseInt(form.steps),
        updatedAt: new Date().toISOString(),
      });
      setMsg(existing ? '✅ Steps updated!' : '✅ Steps saved!');
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
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-white">My Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Today" value={stats.today} />
        <StatCard label="This Week" value={stats.week} />
        <StatCard label="This Month" value={stats.month} />
        <StatCard label="My Rank" value={`#${stats.rank}`} />
      </div>

      {/* Log Steps */}
      <div className="rounded-xl p-5" style={{ background: '#1a1d27', border: '1px solid #2d3148' }}>
        <h3 className="text-base font-semibold text-white mb-4">Log My Steps</h3>
        {msg && <div className="mb-3 p-3 rounded-lg text-sm font-medium" style={{ background: '#064e3b', color: '#6ee7b7' }}>{msg}</div>}
        {error && <div className="mb-3 p-3 rounded-lg text-sm" style={{ background: '#7f1d1d', color: '#fca5a5' }}>{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Date</label>
            <input
              type="date"
              value={form.date}
              max={new Date().toISOString().split('T')[0]}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full rounded-lg px-4 py-3 text-base text-white outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: '#13151f', border: '1px solid #2d3148' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Steps</label>
            <input
              type="number"
              required
              min="0"
              max="100000"
              value={form.steps}
              onChange={(e) => setForm({ ...form, steps: e.target.value })}
              className="w-full rounded-lg px-4 py-3 text-base text-white outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: '#13151f', border: '1px solid #2d3148' }}
              placeholder="e.g. 8500"
            />
          </div>
          <button
            type="submit"
            className="w-full font-bold py-4 rounded-xl text-base text-white transition-colors"
            style={{ background: '#4f8ef7' }}
          >
            💾 Save Steps
          </button>
        </form>
      </div>

      {/* Step History */}
      <div className="rounded-xl overflow-hidden" style={{ background: '#1a1d27', border: '1px solid #2d3148' }}>
        <div className="px-5 py-4" style={{ borderBottom: entries.length > 0 ? '1px solid #2d3148' : 'none' }}>
          <h3 className="font-semibold text-white">Recent Entries</h3>
        </div>
        {entries.length === 0 ? (
          <p className="px-5 py-8 text-center text-slate-500">No steps logged yet. Start tracking!</p>
        ) : (
          <table className="w-full text-sm">
            <thead style={{ background: '#212435' }}>
              <tr>
                <th className="text-left px-5 py-3 text-slate-400 font-medium">Date</th>
                <th className="text-right px-5 py-3 text-slate-400 font-medium">Steps</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.id} style={{ borderBottom: '1px solid #2d3148' }} className="hover:bg-white/5">
                  <td className="px-5 py-3 text-slate-300">{e.date}</td>
                  <td className="px-5 py-3 text-right font-semibold text-white">{e.steps.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right">
                    <button onClick={() => deleteEntry(e.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
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
