import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc, setDoc, query, where, orderBy } from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';
import { db, auth } from '../firebase';

function UserRow({ user, onRoleChange, onResetPassword, onDeleteUser }) {
  const [expanded, setExpanded] = useState(false);
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editSteps, setEditSteps] = useState('');
  const [addForm, setAddForm] = useState({ date: new Date().toISOString().split('T')[0], steps: '' });
  const [loading, setLoading] = useState(false);

  async function loadEntries() {
    setLoading(true);
    const q = query(collection(db, 'stepEntries'), where('userId', '==', user.id), orderBy('date', 'desc'));
    const snap = await getDocs(q);
    setEntries(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(false);
  }

  function toggle() {
    if (!expanded) loadEntries();
    setExpanded(!expanded);
  }

  async function saveEdit(entry) {
    await updateDoc(doc(db, 'stepEntries', entry.id), { steps: parseInt(editSteps), updatedAt: new Date().toISOString() });
    setEditingId(null);
    loadEntries();
  }

  async function deleteEntry(id) {
    if (!confirm('Delete this entry?')) return;
    await deleteDoc(doc(db, 'stepEntries', id));
    loadEntries();
  }

  async function addEntry(e) {
    e.preventDefault();
    const docId = `${user.id}_${addForm.date}`;
    const existing = entries.find(e => e.date === addForm.date);
    const newSteps = (existing ? existing.steps : 0) + parseInt(addForm.steps);
    await setDoc(doc(db, 'stepEntries', docId), {
      userId: user.id,
      date: addForm.date,
      steps: newSteps,
      updatedAt: new Date().toISOString(),
    });
    setAddForm({ date: new Date().toISOString().split('T')[0], steps: '' });
    loadEntries();
  }

  return (
    <>
      {/* User Row */}
      <tr
        onClick={toggle}
        className="cursor-pointer hover:bg-white/5 transition-colors"
        style={{ borderBottom: expanded ? 'none' : '1px solid #2d3148' }}
      >
        <td className="px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs transition-transform" style={{ display: 'inline-block', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
            <span className="font-medium text-white">{user.name}</span>
          </div>
        </td>
        <td className="px-5 py-3 text-slate-400">{user.email}</td>
        <td className="px-5 py-3">
          <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
            style={user.role === 'admin'
              ? { background: '#2e1065', color: '#c4b5fd' }
              : { background: '#1e293b', color: '#64748b' }
            }>
            {user.role}
          </span>
        </td>
        <td className="px-5 py-3 text-right" onClick={e => e.stopPropagation()}>
          <div className="flex gap-3 justify-end flex-wrap">
            <button onClick={() => onRoleChange(user)} className="text-xs text-blue-400 hover:text-blue-300">
              {user.role === 'admin' ? 'Make User' : 'Make Admin'}
            </button>
            <button onClick={() => onResetPassword(user)} className="text-xs text-yellow-400 hover:text-yellow-300">
              Reset Password
            </button>
            <button onClick={() => onDeleteUser(user)} className="text-xs text-red-400 hover:text-red-300">
              Delete
            </button>
          </div>
        </td>
      </tr>

      {/* Expanded Step Log */}
      {expanded && (
        <tr style={{ borderBottom: '1px solid #2d3148' }}>
          <td colSpan={4} className="px-5 pb-4" style={{ background: '#13151f' }}>
            <div className="pt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Step Log for {user.name}</p>

              {/* Add Entry Form */}
              <form onSubmit={addEntry} className="flex flex-wrap gap-2 mb-4 items-end">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Date</label>
                  <input
                    type="date"
                    value={addForm.date}
                    onChange={e => setAddForm({ ...addForm, date: e.target.value })}
                    className="rounded-lg px-3 py-1.5 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ background: '#1a1d27', border: '1px solid #2d3148' }}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Steps</label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="100000"
                    value={addForm.steps}
                    onChange={e => setAddForm({ ...addForm, steps: e.target.value })}
                    placeholder="e.g. 8500"
                    className="rounded-lg px-3 py-1.5 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 w-32"
                    style={{ background: '#1a1d27', border: '1px solid #2d3148' }}
                  />
                </div>
                <button
                  type="submit"
                  className="text-sm font-medium px-4 py-1.5 rounded-lg text-white"
                  style={{ background: '#4f8ef7' }}
                >
                  + Add Steps
                </button>
              </form>

              {/* Entries Table */}
              {loading ? (
                <p className="text-slate-500 text-sm py-2">Loading...</p>
              ) : entries.length === 0 ? (
                <p className="text-slate-500 text-sm py-2">No entries yet.</p>
              ) : (
                <table className="w-full text-sm rounded-lg overflow-hidden" style={{ border: '1px solid #2d3148' }}>
                  <thead style={{ background: '#212435' }}>
                    <tr>
                      <th className="text-left px-4 py-2 text-slate-400 font-medium">Date</th>
                      <th className="text-right px-4 py-2 text-slate-400 font-medium">Steps</th>
                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map(entry => (
                      <tr key={entry.id} style={{ borderTop: '1px solid #2d3148' }} className="hover:bg-white/5">
                        <td className="px-4 py-2 text-slate-300">{entry.date}</td>
                        <td className="px-4 py-2 text-right">
                          {editingId === entry.id ? (
                            <input
                              type="number"
                              value={editSteps}
                              onChange={e => setEditSteps(e.target.value)}
                              className="rounded px-2 py-1 text-sm text-white w-24 text-right outline-none focus:ring-2 focus:ring-blue-500"
                              style={{ background: '#1a1d27', border: '1px solid #4f8ef7' }}
                              autoFocus
                            />
                          ) : (
                            <span className="font-semibold text-white">{entry.steps.toLocaleString()}</span>
                          )}
                        </td>
                        <td className="px-4 py-2 text-right">
                          <div className="flex gap-3 justify-end">
                            {editingId === entry.id ? (
                              <>
                                <button onClick={() => saveEdit(entry)} className="text-xs text-green-400 hover:text-green-300">Save</button>
                                <button onClick={() => setEditingId(null)} className="text-xs text-slate-400 hover:text-slate-300">Cancel</button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => { setEditingId(entry.id); setEditSteps(entry.steps); }} className="text-xs text-blue-400 hover:text-blue-300">Edit</button>
                                <button onClick={() => deleteEntry(entry.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

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
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = 'steps-export.csv';
    a.click();
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        <button onClick={exportCSV} className="text-sm font-medium px-4 py-2 rounded-lg text-white transition-colors"
          style={{ background: '#212435', border: '1px solid #2d3148' }}>
          Export CSV
        </button>
      </div>

      {msg && (
        <div className="p-3 rounded-lg text-sm font-medium flex justify-between items-center"
          style={{ background: '#064e3b', color: '#6ee7b7' }}>
          {msg}
          <button onClick={() => setMsg('')} className="text-green-400 hover:text-green-200 ml-4">✕</button>
        </div>
      )}

      <div className="rounded-xl overflow-x-auto" style={{ background: '#1a1d27', border: '1px solid #2d3148' }}>
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #2d3148' }}>
          <h3 className="font-semibold text-white">Users ({users.length}) <span className="text-xs text-slate-500 font-normal ml-2">— click a user to view/edit their steps</span></h3>
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
            {users.map(u => (
              <UserRow
                key={u.id}
                user={u}
                onRoleChange={toggleRole}
                onResetPassword={resetPassword}
                onDeleteUser={deleteUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
