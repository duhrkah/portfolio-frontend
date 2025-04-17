import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Plattform',
    description: 'Eine moderne E-Commerce-Plattform mit React, Node.js und MongoDB. Implementiert Produktkatalog, Warenkorb, Benutzerauthentifizierung und Zahlungsabwicklung.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/images/ecommerce.jpg',
  },
  {
    title: 'Task Management App',
    description: 'Eine Produktivitäts-App zur Verwaltung von Aufgaben und Projekten. Features: Drag & Drop, Echtzeit-Updates, Team-Kollaboration.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/images/taskmanager.jpg',
  },
  {
    title: 'Weather Dashboard',
    description: 'Ein Wetter-Dashboard mit Echtzeit-Daten und Vorhersagen. Nutzt OpenWeatherMap API und zeigt detaillierte Wetterinformationen an.',
    technologies: ['JavaScript', 'API', 'CSS3', 'HTML5'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: '/images/weather.jpg',
  },
];

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      {!isLoaded && (
        <div className="absolute inset-0 bg-surface-dark/50 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-text-dark mb-4">Projekte</h1>
          <p className="text-text-dark/80 max-w-2xl mx-auto">
            Hier finden Sie eine Auswahl meiner Projekte. Jedes Projekt wurde mit modernen Technologien und Best Practices entwickelt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-dark/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <LazyImage src={project.image} alt={project.title} />

              <div className="p-6">
                <h2 className="text-xl font-bold text-text-dark mb-2">{project.title}</h2>
                <p className="text-text-dark/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-background-dark/50 text-text-dark/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-lg bg-background-dark/50 text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
                  >
                    <FiGithub className="mr-2" />
                    GitHub
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-lg bg-primary-dark text-white hover:bg-primary-dark/90 transition-colors duration-300"
                  >
                    <FiExternalLink className="mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 