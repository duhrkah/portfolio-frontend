import React from 'react';
import { motion } from 'framer-motion';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <FiLock className="text-6xl text-red-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Zugriff verweigert</h1>
        <p className="text-gray-400 mb-8">
          Sie haben keine Berechtigung, auf diese Seite zuzugreifen.
          Bitte wenden Sie sich an einen Administrator, wenn Sie der Meinung sind,
          dass dies ein Fehler ist.
        </p>
        <Link
          to="/admin/dashboard"
          className="inline-block px-6 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-light transition-colors"
        >
          Zurück zum Dashboard
        </Link>
      </motion.div>
    </div>
  );
};

export default Unauthorized; 