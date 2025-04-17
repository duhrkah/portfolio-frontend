import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiFileText } from 'react-icons/fi';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-text-dark mb-4">Impressum</h1>
          <p className="text-text-dark/80">
            Rechtliche Informationen gemäß § 5 TMG
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Kontaktinformationen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-text-dark mb-6">Kontakt</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                  <FiFileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-dark">Name</h3>
                  <p className="text-text-dark/80">Max Mustermann</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-dark">Adresse</h3>
                  <p className="text-text-dark/80">
                    Musterstraße 123<br />
                    12345 Berlin<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-dark">E-Mail</h3>
                  <a
                    href="mailto:kontakt@example.com"
                    className="text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
                  >
                    kontakt@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-dark">Telefon</h3>
                  <a
                    href="tel:+49123456789"
                    className="text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
                  >
                    +49 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rechtliche Hinweise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-text-dark mb-6">Rechtliche Hinweise</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Inhaltlich Verantwortlicher</h3>
                <p className="text-text-dark/80">
                  Max Mustermann<br />
                  Musterstraße 123<br />
                  12345 Berlin
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Haftung für Inhalte</h3>
                <p className="text-text-dark/80">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Urheberrecht</h3>
                <p className="text-text-dark/80">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                  der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Datenschutz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-text-dark mb-6">Datenschutz</h2>
            <p className="text-text-dark/80 mb-4">
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
              unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben
              werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
            </p>
            <p className="text-text-dark/80">
              Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
              <a
                href="/datenschutz"
                className="text-primary-dark hover:text-primary-dark/80 transition-colors duration-300"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Impressum; 