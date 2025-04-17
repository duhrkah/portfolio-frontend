import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { FiLock, FiUser, FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(username, password);
      if (success) {
        navigate('/');
      }
    } catch (error) {
      console.error('Login Fehler:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background-dark to-background-light pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 p-8 bg-surface-dark rounded-2xl shadow-2xl"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-text-dark mb-2">
            Willkommen zurück
          </h2>
          <p className="text-text-dark/60">
            Bitte melden Sie sich an, um fortzufahren
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-red-500/10 p-4 border border-red-500/20"
            >
              <div className="flex items-center">
                <FiAlertCircle className="h-5 w-5 text-red-500 mr-3" />
                <p className="text-sm text-red-500">{error}</p>
              </div>
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-text-dark mb-1">
                Benutzername
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-text-dark/50" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-3 pl-10 border border-border-dark bg-background-dark text-text-dark placeholder-text-dark/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all duration-200"
                  placeholder="Geben Sie Ihren Benutzernamen ein"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-dark mb-1">
                Passwort
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-text-dark/50" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-3 pl-10 pr-10 border border-border-dark bg-background-dark text-text-dark placeholder-text-dark/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all duration-200"
                  placeholder="Geben Sie Ihr Passwort ein"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-dark/50 hover:text-text-dark transition-colors"
                >
                  {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/admin/forgot-password"
                className="text-text-dark/70 hover:text-primary-dark transition-colors"
              >
                Passwort vergessen?
              </Link>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-dark hover:bg-primary-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-all duration-200"
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            ) : (
              'Anmelden'
            )}
          </motion.button>
        </form>

        <div className="text-center space-y-4">
          <Link
            to="/"
            className="text-sm text-text-dark/70 hover:text-primary-dark transition-colors"
          >
            Zurück zur Startseite
          </Link>
          <div className="mt-4 text-sm text-text-dark/70">
            <p className="font-medium">Beispielzugangsdaten:</p>
            <div className="mt-2 space-y-1">
              <p>Admin: admin / admin123</p>
              <p>Editor: editor / editor123</p>
              <p>Viewer: viewer / viewer123</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login; 