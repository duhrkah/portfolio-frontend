import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-dark/90 backdrop-blur-md border-t border-background-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold text-text-dark mb-4">Kontakt</h3>
            <div className="space-y-2">
              <a
                href="mailto:kontakt@example.com"
                className="flex items-center text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
              >
                <FiMail className="mr-2" />
                kontakt@example.com
              </a>
              <div className="flex space-x-4 mt-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
                >
                  <FiGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
                >
                  <FiLinkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold text-text-dark mb-4">Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
              >
                Über mich
              </Link>
              <Link
                to="/projects"
                className="block text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
              >
                Projekte
              </Link>
              <Link
                to="/contact"
                className="block text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Rechtliche Links */}
          <div>
            <h3 className="text-xl font-bold text-text-dark mb-4">Rechtliche Links</h3>
            <div className="space-y-2">
              <Link
                to="/impressum"
                className="block text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="block text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright und Back to Top */}
        <div className="mt-12 pt-8 border-t border-background-dark/20 flex justify-between items-center">
          <p className="text-text-dark/60">
            © {new Date().getFullYear()} Portfolio. Alle Rechte vorbehalten.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-background-dark/50 text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 