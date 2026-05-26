import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar({ role }) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = auth.currentUser;
  const [menuOpen, setMenuOpen] = useState(false);

  async function logout() {
    await signOut(auth);
    navigate('/login');
  }

  const linkClass = (path) =>
    `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-slate-400 hover:text-white hover:bg-white/10'
    }`;

  return (
    <nav style={{ background: '#1a1d27', borderBottom: '1px solid #2d3148' }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <span className="text-lg font-semibold text-white tracking-wide">🏃 StepTracker</span>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1">
            <Link to="/" className={linkClass('/')}>My Steps</Link>
            <Link to="/leaderboard" className={linkClass('/leaderboard')}>Leaderboard</Link>
            {role === 'admin' && <Link to="/admin" className={linkClass('/admin')}>Admin</Link>}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm text-slate-400">{user?.displayName}</span>
            <button onClick={logout} className="text-sm text-slate-400 hover:text-red-400 transition-colors">
              Logout
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden pb-3 space-y-1 pt-2" style={{ borderTop: '1px solid #2d3148' }}>
            <Link to="/" onClick={() => setMenuOpen(false)} className={linkClass('/')}>My Steps</Link>
            <Link to="/leaderboard" onClick={() => setMenuOpen(false)} className={linkClass('/leaderboard')}>Leaderboard</Link>
            {role === 'admin' && (
              <Link to="/admin" onClick={() => setMenuOpen(false)} className={linkClass('/admin')}>Admin</Link>
            )}
            <div className="px-4 pt-2 pb-1 flex items-center justify-between" style={{ borderTop: '1px solid #2d3148' }}>
              <span className="text-sm text-slate-400">{user?.displayName}</span>
              <button onClick={logout} className="text-sm text-red-400 hover:text-red-300 font-medium">Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
