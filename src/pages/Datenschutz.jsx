import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiDatabase, FiLock, FiMail, FiGlobe } from 'react-icons/fi';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-text-dark mb-4">Datenschutzerklärung</h1>
          <p className="text-text-dark/80">
            Informationen zum Umgang mit Ihren personenbezogenen Daten
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Einleitung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                <FiShield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-dark">Datenschutz auf einen Blick</h2>
              </div>
            </div>
            <p className="text-text-dark/80">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
              ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In dieser
              Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen
              unserer Website.
            </p>
          </motion.div>

          {/* Erhebung und Verarbeitung von Daten */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                <FiDatabase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-dark">Erhebung und Verarbeitung von Daten</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Kontaktformular</h3>
                <p className="text-text-dark/80">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
                  Ihre Einwilligung weiter.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Server-Log-Files</h3>
                <p className="text-text-dark/80">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log
                  Files, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion,
                  verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der
                  Serveranfrage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                <FiLock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-dark">Cookies</h2>
              </div>
            </div>
            <p className="text-text-dark/80">
              Unsere Website verwendet keine Cookies. Wir verzichten bewusst auf die Verwendung von Tracking-Tools
              und Analyse-Software, um Ihre Privatsphäre bestmöglich zu schützen.
            </p>
          </motion.div>

          {/* Ihre Rechte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-dark">Ihre Rechte</h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-text-dark/80">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
              <p className="text-text-dark/80">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften,
                Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <div className="bg-background-dark/50 p-4 rounded-lg">
                <p className="text-text-dark/80">
                  Max Mustermann<br />
                  Musterstraße 123<br />
                  12345 Berlin<br />
                  E-Mail: datenschutz@example.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Änderungen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-background-dark/50 text-primary-dark">
                <FiGlobe className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-dark">Änderungen dieser Datenschutzerklärung</h2>
              </div>
            </div>
            <p className="text-text-dark/80">
              Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um sie an geänderte Rechtslagen oder bei
              Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Für Ihren erneuten Besuch gilt dann
              die neue Datenschutzerklärung.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz; 