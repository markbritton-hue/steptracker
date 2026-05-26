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
        ? 'bg-brand-600 text-white'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <span className="text-lg font-bold text-brand-600">🏃 StepTracker</span>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1">
            <Link to="/" className={linkClass('/')}>My Steps</Link>
            <Link to="/leaderboard" className={linkClass('/leaderboard')}>Leaderboard</Link>
            {role === 'admin' && <Link to="/admin" className={linkClass('/admin')}>Admin</Link>}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm text-gray-500">{user?.displayName}</span>
            <button onClick={logout} className="text-sm text-gray-500 hover:text-red-600 transition-colors">
              Logout
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
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
          <div className="sm:hidden pb-3 space-y-1 border-t border-gray-100 pt-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className={linkClass('/')}>My Steps</Link>
            <Link to="/leaderboard" onClick={() => setMenuOpen(false)} className={linkClass('/leaderboard')}>Leaderboard</Link>
            {role === 'admin' && (
              <Link to="/admin" onClick={() => setMenuOpen(false)} className={linkClass('/admin')}>Admin</Link>
            )}
            <div className="px-4 pt-2 pb-1 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm text-gray-500">{user?.displayName}</span>
              <button onClick={logout} className="text-sm text-red-500 hover:text-red-700 font-medium">Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
