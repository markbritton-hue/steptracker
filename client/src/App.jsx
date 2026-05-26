import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';

function PrivateRoute({ user, children }) {
  if (user === undefined) return <div className="flex items-center justify-center min-h-screen text-gray-400">Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

function AdminRoute({ user, role, children }) {
  if (user === undefined) return <div className="flex items-center justify-center min-h-screen text-gray-400">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (role !== 'admin') return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  const [user, setUser] = useState(undefined); // undefined = loading
  const [role, setRole] = useState('user');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch role from Firestore
        const snap = await getDoc(doc(db, 'users', firebaseUser.uid));
        setRole(snap.exists() ? snap.data().role : 'user');
        setUser(firebaseUser);
      } else {
        setUser(null);
        setRole('user');
      }
    });
    return unsub;
  }, []);

  return (
    <div className="min-h-screen">
      {user && <Navbar role={role} />}
      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />
          <Route path="/" element={<PrivateRoute user={user}><Dashboard /></PrivateRoute>} />
          <Route path="/leaderboard" element={<PrivateRoute user={user}><Leaderboard /></PrivateRoute>} />
          <Route path="/admin" element={<AdminRoute user={user} role={role}><Admin /></AdminRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
