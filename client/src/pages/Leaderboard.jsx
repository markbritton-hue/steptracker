import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const PERIODS = [
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' },
  { value: 'all', label: 'All Time' },
];

const MEDALS = ['🥇', '🥈', '🥉'];

export default function Leaderboard() {
  const [period, setPeriod] = useState('month');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const me = auth.currentUser;

  useEffect(() => {
    async function load() {
      setLoading(true);

      // Date filter
      let dateFilter = null;
      if (period === 'week') {
        dateFilter = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
      } else if (period === 'month') {
        dateFilter = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
      }

      // Get all step entries for period
      let q = dateFilter
        ? query(collection(db, 'stepEntries'), where('date', '>=', dateFilter))
        : query(collection(db, 'stepEntries'));

      const [stepsSnap, usersSnap] = await Promise.all([
        getDocs(q),
        getDocs(collection(db, 'users')),
      ]);

      // Map userId -> name
      const userMap = {};
      usersSnap.docs.forEach(d => { userMap[d.id] = d.data().name; });

      // Aggregate steps per user
      const totals = {};
      const days = {};
      stepsSnap.docs.forEach(d => {
        const { userId, steps } = d.data();
        totals[userId] = (totals[userId] || 0) + steps;
        days[userId] = (days[userId] || 0) + 1;
      });

      // Build leaderboard — include all users even with 0 steps
      const rows = usersSnap.docs.map(d => ({
        id: d.id,
        name: d.data().name,
        total_steps: totals[d.id] || 0,
        days_logged: days[d.id] || 0,
      }));

      rows.sort((a, b) => b.total_steps - a.total_steps);
      setData(rows.map((r, i) => ({ ...r, rank: i + 1 })));
      setLoading(false);
    }
    load();
  }, [period]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold">🏆 Leaderboard</h2>
        <div className="flex gap-2 flex-wrap">
          {PERIODS.map((p) => (
            <button
              key={p.value}
              onClick={() => setPeriod(p.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                period === p.value
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-brand-500'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
        {loading ? (
          <p className="px-6 py-12 text-center text-gray-400">Loading...</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-gray-500 font-medium w-12">Rank</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Name</th>
                <th className="text-right px-6 py-3 text-gray-500 font-medium">Days</th>
                <th className="text-right px-6 py-3 text-gray-500 font-medium">Total Steps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row) => (
                <tr key={row.id} className={`transition-colors ${row.id === me?.uid ? 'bg-brand-50' : 'hover:bg-gray-50'}`}>
                  <td className="px-6 py-3 font-bold text-gray-700">
                    {row.rank <= 3 ? MEDALS[row.rank - 1] : `#${row.rank}`}
                  </td>
                  <td className="px-6 py-3 text-gray-900 font-medium">
                    {row.name}
                    {row.id === me?.uid && <span className="ml-2 text-xs text-brand-600">(you)</span>}
                  </td>
                  <td className="px-6 py-3 text-right text-gray-500">{row.days_logged}</td>
                  <td className="px-6 py-3 text-right font-bold text-gray-900">{row.total_steps.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
