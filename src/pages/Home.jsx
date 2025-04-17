import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    {
      title: 'Frontend',
      description: 'Moderne Webentwicklung mit React, TypeScript und modernen CSS-Frameworks.',
      icon: <FiCode className="w-8 h-8" />,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      description: 'Skalierbare Server-Architekturen mit Node.js, Express und Datenbanken.',
      icon: <FiServer className="w-8 h-8" />,
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'DevOps',
      description: 'CI/CD Pipelines, Containerisierung und Cloud-Deployment.',
      icon: <FiCloud className="w-8 h-8" />,
      technologies: ['Docker', 'AWS', 'GitHub Actions', 'Kubernetes'],
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6">
            Willkommen auf meinem Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-text-dark/80 max-w-3xl mx-auto mb-8">
            Ich bin ein Full-Stack Entwickler mit Fokus auf moderne Webtechnologien und benutzerfreundliche Anwendungen.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/projects"
              className="inline-block px-8 py-4 rounded-lg bg-primary-dark text-white font-medium hover:bg-primary-dark/90 transition-colors duration-300"
            >
              Meine Projekte entdecken
            </Link>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary-dark mb-4">{skill.icon}</div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">{skill.title}</h2>
              <p className="text-text-dark/80 mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-background-dark/50 text-text-dark/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-text-dark mb-6">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="text-text-dark/80 max-w-2xl mx-auto mb-8">
            Lassen Sie uns zusammenarbeiten und Ihre Ideen in die Realität umsetzen.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-primary-dark text-white font-medium hover:bg-primary-dark/90 transition-colors duration-300"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 