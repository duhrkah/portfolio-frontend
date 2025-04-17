import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import { FiSend } from 'react-icons/fi';
import rateLimiter from '../utils/rateLimiter';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);

  // Simuliere eine Client-IP (in einer echten Anwendung würde diese vom Server kommen)
  const clientIp = '127.0.0.1';

  useEffect(() => {
    const checkRateLimit = () => {
      const time = rateLimiter.getRemainingTime(clientIp);
      setRemainingTime(time);
    };

    checkRateLimit();
    const interval = setInterval(checkRateLimit, 1000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Fehler zurücksetzen, wenn der Benutzer das Feld bearbeitet
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!rateLimiter.isAllowed(clientIp)) {
      setSubmitStatus('rateLimit');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Hier würde normalerweise der API-Aufruf stattfinden
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simuliere eine erfolgreiche Übermittlung
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Fehler beim Senden:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Kontaktieren Sie mich
      </h2>

      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        placeholder="Ihr Name"
      />

      <FormInput
        label="E-Mail"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        placeholder="Ihre E-Mail-Adresse"
      />

      <FormInput
        label="Betreff"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        placeholder="Betreff Ihrer Nachricht"
      />

      <FormTextarea
        label="Nachricht"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        placeholder="Ihre Nachricht"
        rows={6}
      />

      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md">
          Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md">
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
        </div>
      )}

      {submitStatus === 'rateLimit' && (
        <div className="mb-4 p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-md">
          Bitte warten Sie {Math.ceil(remainingTime / 1000)} Sekunden, bevor Sie eine weitere Nachricht senden.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || remainingTime > 0}
        className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-light dark:bg-primary-dark hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors duration-200 ${
          (isSubmitting || remainingTime > 0) ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          'Wird gesendet...'
        ) : remainingTime > 0 ? (
          `Bitte warten (${Math.ceil(remainingTime / 1000)}s)`
        ) : (
          <>
            <FiSend className="mr-2" />
            Nachricht senden
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm; 