import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ errorCode, message, showHomeButton = true }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">{errorCode}</h1>
        <p className="text-xl text-text-dark mb-8">{message}</p>
        {showHomeButton && (
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Zurück zur Startseite
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage; 