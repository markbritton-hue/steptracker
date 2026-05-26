import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(user, { displayName: form.name });
      await setDoc(doc(db, 'users', user.uid), {
        name: form.name,
        email: form.email.toLowerCase(),
        role: 'user',
        createdAt: serverTimestamp(),
      });
      // Let onAuthStateChanged in App.jsx handle the redirect
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') setError('Email already registered');
      else if (err.code === 'auth/weak-password') setError('Password must be at least 6 characters');
      else setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0f1117' }}>
      <div className="w-full max-w-sm rounded-xl p-8" style={{ background: '#1a1d27', border: '1px solid #2d3148' }}>
        <h1 className="text-2xl font-bold text-center text-white mb-1">🏃 StepTracker</h1>
        <p className="text-center text-slate-400 text-sm mb-6">Create your account</p>

        {error && <div className="mb-4 p-3 rounded-lg text-sm" style={{ background: '#7f1d1d', color: '#fca5a5' }}>{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg px-4 py-3 text-base text-white outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: '#13151f', border: '1px solid #2d3148' }}
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg px-4 py-3 text-base text-white outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: '#13151f', border: '1px solid #2d3148' }}
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-lg px-4 py-3 text-base text-white outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: '#13151f', border: '1px solid #2d3148' }}
              placeholder="Min. 6 characters"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 text-white"
            style={{ background: '#4f8ef7' }}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline font-medium">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
