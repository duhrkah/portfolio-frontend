import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-dark text-text-dark p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Seite nicht gefunden</h2>
        <p className="text-lg mb-8">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 