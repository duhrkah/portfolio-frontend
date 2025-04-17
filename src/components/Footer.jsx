import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-dark/80 backdrop-blur-md border-t border-background-dark/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo und Beschreibung */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
              Portfolio
            </Link>
            <p className="mt-4 text-text-dark/80 max-w-md">
              Ein modernes Portfolio, das meine Projekte und Fähigkeiten als Webentwickler präsentiert.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background-dark/20 text-text-dark/80 hover:text-primary hover:bg-background-dark/40 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background-dark/20 text-text-dark/80 hover:text-primary hover:bg-background-dark/40 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background-dark/20 text-text-dark/80 hover:text-primary hover:bg-background-dark/40 transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background-dark/20 text-text-dark/80 hover:text-primary hover:bg-background-dark/40 transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-4">Navigation</h3>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-text-dark/80 hover:text-primary hover:translate-x-1 transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-text-dark/80 hover:text-primary hover:translate-x-1 transition-all duration-300"
              >
                Über mich
              </Link>
              <Link
                to="/projects"
                className="block text-text-dark/80 hover:text-primary hover:translate-x-1 transition-all duration-300"
              >
                Projekte
              </Link>
              <Link
                to="/contact"
                className="block text-text-dark/80 hover:text-primary hover:translate-x-1 transition-all duration-300"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-4">Kontakt</h3>
            <div className="space-y-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="mailto:kontakt@example.com"
                className="flex items-center text-text-dark/80 hover:text-primary transition-colors"
              >
                <FiMail className="mr-2" />
                kontakt@example.com
              </motion.a>
              <p className="text-text-dark/80">
                Musterstraße 123<br />
                12345 Musterstadt
              </p>
            </div>
          </div>
        </div>

        {/* Copyright und Back to Top */}
        <div className="mt-12 pt-8 border-t border-background-dark/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-dark/60 text-sm">
            © {currentYear} Portfolio. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/impressum"
              className="text-sm text-text-dark/60 hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-sm text-text-dark/60 hover:text-primary transition-colors"
            >
              Datenschutz
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 rounded-full bg-background-dark/20 text-text-dark/80 hover:text-primary hover:bg-background-dark/40 transition-colors"
              aria-label="Nach oben scrollen"
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 