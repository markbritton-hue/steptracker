import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';
import { db, auth } from '../firebase';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState('');

  async function loadUsers() {
    const snap = await getDocs(collection(db, 'users'));
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a, b) => a.name.localeCompare(b.name));
    setUsers(list);
  }

  useEffect(() => { loadUsers(); }, []);

  async function toggleRole(user) {
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    await updateDoc(doc(db, 'users', user.id), { role: newRole });
    loadUsers();
  }

  async function resetPassword(user) {
    try {
      await sendPasswordResetEmail(auth, user.email);
      setMsg(`Password reset email sent to ${user.email}`);
    } catch (err) {
      setMsg(`Failed to send reset email to ${user.email}`);
    }
  }

  async function deleteUser(user) {
    if (!confirm(`Delete ${user.name}? This will also delete all their step entries.`)) return;
    const stepsSnap = await getDocs(query(collection(db, 'stepEntries'), where('userId', '==', user.id)));
    await Promise.all(stepsSnap.docs.map(d => deleteDoc(d.ref)));
    await deleteDoc(doc(db, 'users', user.id));
    setMsg(`${user.name} deleted.`);
    loadUsers();
  }

  async function exportCSV() {
    const [usersSnap, stepsSnap] = await Promise.all([
      getDocs(collection(db, 'users')),
      getDocs(collection(db, 'stepEntries')),
    ]);
    const userMap = {};
    usersSnap.docs.forEach(d => { userMap[d.id] = d.data(); });

    let csv = 'Name,Email,Date,Steps\n';
    const rows = stepsSnap.docs.map(d => ({ ...d.data() })).sort((a, b) => a.date > b.date ? 1 : -1);
    csv += rows.map(r => {
      const u = userMap[r.userId] || {};
      return `"${u.name || ''}","${u.email || ''}","${r.date}",${r.steps}`;
    }).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'steps-export.csv';
    a.click();
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        <button
          onClick={exportCSV}
          className="text-sm font-medium px-4 py-2 rounded-lg transition-colors text-white"
          style={{ background: '#212435', border: '1px solid #2d3148' }}
        >
          Export CSV
        </button>
      </div>

      {msg && <div className="p-3 rounded-lg text-sm font-medium" style={{ background: '#064e3b', color: '#6ee7b7' }}>{msg}</div>}

      <div className="rounded-xl overflow-x-auto" style={{ background: '#1a1d27', border: '1px solid #2d3148' }}>
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #2d3148' }}>
          <h3 className="font-semibold text-white">Users ({users.length})</h3>
        </div>
        <table className="w-full text-sm">
          <thead style={{ background: '#212435' }}>
            <tr>
              <th className="text-left px-5 py-3 text-slate-400 font-medium">Name</th>
              <th className="text-left px-5 py-3 text-slate-400 font-medium">Email</th>
              <th className="text-left px-5 py-3 text-slate-400 font-medium">Role</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} style={{ borderBottom: '1px solid #2d3148' }} className="hover:bg-white/5">
                <td className="px-5 py-3 font-medium text-white">{u.name}</td>
                <td className="px-5 py-3 text-slate-400">{u.email}</td>
                <td className="px-5 py-3">
                  <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                    style={u.role === 'admin'
                      ? { background: '#2e1065', color: '#c4b5fd' }
                      : { background: '#1e293b', color: '#64748b' }
                    }>
                    {u.role}
                  </span>
                </td>
                <td className="px-5 py-3 text-right space-x-3">
                  <button onClick={() => toggleRole(u)} className="text-xs text-blue-400 hover:text-blue-300">
                    {u.role === 'admin' ? 'Make User' : 'Make Admin'}
                  </button>
                  <button onClick={() => resetPassword(u)} className="text-xs text-yellow-400 hover:text-yellow-300">
                    Reset Password
                  </button>
                  <button onClick={() => deleteUser(u)} className="text-xs text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
