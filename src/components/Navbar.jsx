import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../admin/AuthProvider';
import { FiMenu, FiX, FiUser, FiLogOut, FiHome } from 'react-icons/fi';
import { ROLES } from '../admin/constants';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-surface-dark/80 backdrop-blur-md border-b border-background-dark/20 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="text-xl font-bold text-primary hover:text-primary-dark transition-colors">
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary bg-background-dark/20'
                        : 'text-text-dark hover:text-primary hover:bg-background-dark/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <div className="flex items-center space-x-4">
                  {getDashboardPath() && (
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        to={getDashboardPath()}
                        className="p-2 rounded-full text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
                        title="Dashboard"
                      >
                        <FiHome className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  )}
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      to="/admin/profile"
                      className="p-2 rounded-full text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
                      title="Profil"
                    >
                      <FiUser className="h-5 w-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <button
                      onClick={logout}
                      className="p-2 rounded-full text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
                      title="Abmelden"
                    >
                      <FiLogOut className="h-5 w-5" />
                    </button>
                  </motion.div>
                </div>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/admin/login"
                    className="px-4 py-2 rounded-md text-sm font-medium text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
                  >
                    Login
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-surface-dark/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary bg-background-dark/20'
                        : 'text-text-dark hover:text-primary hover:bg-background-dark/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {user ? (
                <div className="flex items-center space-x-4 px-3 py-2">
                  {getDashboardPath() && (
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        to={getDashboardPath()}
                        className="p-2 rounded-full text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
                        title="Dashboard"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FiHome className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  )}
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      to="/admin/profile"
                      className="p-2 rounded-full text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
                      title="Profil"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FiUser className="h-5 w-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="p-2 rounded-full text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
                      title="Abmelden"
                    >
                      <FiLogOut className="h-5 w-5" />
                    </button>
                  </motion.div>
                </div>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/admin/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:text-primary hover:bg-background-dark/20 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 