import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0f1117' }}>
      <div className="w-full max-w-sm rounded-xl p-8" style={{ background: '#1a1d27', border: '1px solid #2d3148' }}>
        <h1 className="text-2xl font-bold text-center text-white mb-1">🏃 StepTracker</h1>
        <p className="text-center text-slate-400 text-sm mb-6">Company Step Challenge</p>

        {error && <div className="mb-4 p-3 rounded-lg text-sm" style={{ background: '#7f1d1d', color: '#fca5a5' }}>{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 text-white"
            style={{ background: '#4f8ef7' }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-4">
          No account?{' '}
          <Link to="/register" className="text-blue-400 hover:underline font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
