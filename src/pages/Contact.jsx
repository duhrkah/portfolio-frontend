import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-text-dark mb-4">Kontakt</h1>
          <p className="text-text-dark/80 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie mit mir zusammenarbeiten? 
            Füllen Sie das Formular aus oder kontaktieren Sie mich direkt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontaktinformationen */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Kontaktinformationen</h2>
              
              <div className="space-y-6">
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
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-dark">Standort</h3>
                    <p className="text-text-dark/80">Berlin, Deutschland</p>
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

              <div className="mt-8 pt-8 border-t border-background-dark/20">
                <h3 className="text-lg font-semibold text-text-dark mb-4">Social Media</h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background-dark/50 text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
                  >
                    <FiGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background-dark/50 text-text-dark/80 hover:text-primary-dark transition-colors duration-300"
                  >
                    <FiLinkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kontaktformular */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-surface-dark/50 backdrop-blur-md rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Kontaktformular</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="name-input"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-surface-dark text-text-dark"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500" data-testid="name-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark/80">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    data-testid="email-input"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-surface-dark text-text-dark"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500" data-testid="email-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark/80">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    data-testid="message-input"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-surface-dark text-text-dark"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500" data-testid="message-error">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="rounded-md bg-green-50 p-4" data-testid="success-message">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <FiCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Vielen Dank für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-md bg-red-50 p-4" data-testid="error-message">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <FiAlertCircle className="h-5 w-5 text-red-500 mr-3" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 