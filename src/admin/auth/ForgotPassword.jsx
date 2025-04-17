import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulierte API-Antwort
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setError(null);
    } catch (err) {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
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
            Passwort zurücksetzen
          </h2>
          <p className="text-text-dark/60">
            Geben Sie Ihre E-Mail-Adresse ein, um einen Link zum Zurücksetzen Ihres Passworts zu erhalten
          </p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-4"
          >
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
              <p className="text-green-500">
                Eine E-Mail mit Anweisungen zum Zurücksetzen Ihres Passworts wurde gesendet.
              </p>
            </div>
            <Link
              to="/admin/login"
              className="inline-flex items-center text-sm text-text-dark/70 hover:text-primary-dark transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Zurück zum Login
            </Link>
          </motion.div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-red-500/10 p-4 border border-red-500/20"
              >
                <p className="text-sm text-red-500">{error}</p>
              </motion.div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-text-dark/50" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 pl-10 border border-border-dark bg-background-dark text-text-dark placeholder-text-dark/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all duration-200"
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-dark hover:bg-primary-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-all duration-200"
            >
              Link zum Zurücksetzen senden
            </motion.button>

            <div className="text-center">
              <Link
                to="/admin/login"
                className="text-sm text-text-dark/70 hover:text-primary-dark transition-colors"
              >
                Zurück zum Login
              </Link>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPassword; 