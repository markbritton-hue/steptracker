import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase';

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

  async function deleteUser(user) {
    if (!confirm(`Delete ${user.name}? This will also delete all their step entries.`)) return;
    // Delete all step entries for this user
    const stepsSnap = await getDocs(query(collection(db, 'stepEntries'), where('userId', '==', user.id)));
    await Promise.all(stepsSnap.docs.map(d => deleteDoc(d.ref)));
    // Delete user profile
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
    const rows = stepsSnap.docs
      .map(d => ({ ...d.data() }))
      .sort((a, b) => a.date > b.date ? 1 : -1);

    csv += rows.map(r => {
      const u = userMap[r.userId] || {};
      return `"${u.name || ''}","${u.email || ''}","${r.date}",${r.steps}`;
    }).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'steps-export.csv';
    a.click();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <button
          onClick={exportCSV}
          className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Export CSV
        </button>
      </div>

      {msg && <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">{msg}</div>}

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold">Users ({users.length})</h3>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-gray-500 font-medium">Name</th>
              <th className="text-left px-6 py-3 text-gray-500 font-medium">Email</th>
              <th className="text-left px-6 py-3 text-gray-500 font-medium">Role</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium text-gray-900">{u.name}</td>
                <td className="px-6 py-3 text-gray-500">{u.email}</td>
                <td className="px-6 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-3 text-right space-x-3">
                  <button onClick={() => toggleRole(u)} className="text-xs text-blue-500 hover:text-blue-700">
                    {u.role === 'admin' ? 'Make User' : 'Make Admin'}
                  </button>
                  <button onClick={() => deleteUser(u)} className="text-xs text-red-400 hover:text-red-600">
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
