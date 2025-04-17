import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../admin/AuthProvider';
import { FiMenu, FiX, FiUser, FiLogOut, FiHome } from 'react-icons/fi';
import { ROLES } from '../admin/constants';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Über mich' },
    { path: '/projects', label: 'Projekte' },
    { path: '/contact', label: 'Kontakt' }
  ];

  const getDashboardPath = () => {
    if (!user) return null;
    switch (user.role) {
      case ROLES.ADMIN:
        return '/admin/dashboard';
      case ROLES.EDITOR:
        return '/editor/dashboard';
      case ROLES.VIEWER:
        return '/viewer/dashboard';
      default:
        return null;
    }
  };

  return (
    <nav className="bg-surface-dark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-text-dark hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <div className="flex items-center space-x-4">
                  {getDashboardPath() && (
                    <Link
                      to={getDashboardPath()}
                      className="text-text-dark hover:text-primary"
                      title="Dashboard"
                    >
                      <FiHome className="h-5 w-5" />
                    </Link>
                  )}
                  <Link
                    to="/admin/profile"
                    className="text-text-dark hover:text-primary"
                    title="Profil"
                  >
                    <FiUser className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={logout}
                    className="text-text-dark hover:text-primary"
                    title="Abmelden"
                  >
                    <FiLogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/admin/login"
                  className="text-text-dark hover:text-primary"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-dark hover:text-primary"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-text-dark hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center space-x-4 px-3 py-2">
                {getDashboardPath() && (
                  <Link
                    to={getDashboardPath()}
                    className="text-text-dark hover:text-primary"
                    title="Dashboard"
                  >
                    <FiHome className="h-5 w-5" />
                  </Link>
                )}
                <Link
                  to="/admin/profile"
                  className="text-text-dark hover:text-primary"
                  title="Profil"
                >
                  <FiUser className="h-5 w-5" />
                </Link>
                <button
                  onClick={logout}
                  className="text-text-dark hover:text-primary"
                  title="Abmelden"
                >
                  <FiLogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/admin/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:text-primary"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 