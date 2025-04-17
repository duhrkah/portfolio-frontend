import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud, FiDatabase, FiGitBranch, FiMonitor } from 'react-icons/fi';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: <FiCode className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <FiCode className="w-5 h-5" /> },
        { name: 'Tailwind CSS', icon: <FiCode className="w-5 h-5" /> },
        { name: 'Framer Motion', icon: <FiCode className="w-5 h-5" /> },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: <FiServer className="w-5 h-5" /> },
        { name: 'Express', icon: <FiServer className="w-5 h-5" /> },
        { name: 'MongoDB', icon: <FiDatabase className="w-5 h-5" /> },
        { name: 'PostgreSQL', icon: <FiDatabase className="w-5 h-5" /> },
      ],
    },
    {
      category: 'DevOps',
      items: [
        { name: 'Docker', icon: <FiCloud className="w-5 h-5" /> },
        { name: 'AWS', icon: <FiCloud className="w-5 h-5" /> },
        { name: 'GitHub Actions', icon: <FiGitBranch className="w-5 h-5" /> },
        { name: 'Kubernetes', icon: <FiMonitor className="w-5 h-5" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold text-text-dark mb-6">Über mich</h1>
          <p className="text-text-dark/80 max-w-3xl mx-auto">
            Erfahren Sie mehr über meine Erfahrung, Fähigkeiten und Leidenschaft für die Webentwicklung.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-text-dark mb-4">Wer ich bin</h2>
              <p className="text-text-dark/80 mb-4">
                Ich bin ein leidenschaftlicher Full-Stack Entwickler mit Fokus auf moderne Webtechnologien.
                Meine Reise in der Softwareentwicklung begann vor mehreren Jahren, und seitdem habe ich
                kontinuierlich meine Fähigkeiten erweitert und neue Technologien erlernt.
              </p>
              <p className="text-text-dark/80">
                Meine Stärken liegen in der Entwicklung benutzerfreundlicher Anwendungen, der Implementierung
                skalierbarer Backend-Systeme und der Optimierung von Entwicklungsprozessen.
              </p>
            </div>

            <div className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-text-dark mb-4">Mein Ansatz</h2>
              <p className="text-text-dark/80">
                Ich glaube an sauberen, wartbaren Code und moderne Entwicklungspraktiken. Meine Arbeit
                zeichnet sich durch Aufmerksamkeit für Details, Leistungsoptimierung und eine starke
                Benutzerorientierung aus.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-text-dark mb-6">{skillCategory.category}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {skillCategory.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-background-dark/50"
                    >
                      <span className="text-primary-dark">{skill.icon}</span>
                      <span className="text-text-dark/80">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-text-dark mb-6">
            Interessiert an einer Zusammenarbeit?
          </h2>
          <p className="text-text-dark/80 max-w-2xl mx-auto mb-8">
            Lassen Sie uns gemeinsam Ihr nächstes Projekt realisieren.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-primary-dark text-white font-medium hover:bg-primary-dark/90 transition-colors duration-300"
          >
            Kontakt aufnehmen
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 