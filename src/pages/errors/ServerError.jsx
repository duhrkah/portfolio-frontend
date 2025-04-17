import React from 'react';
import ErrorPage from '../../components/ErrorPage';
import { FiServer } from 'react-icons/fi';

const ServerError = () => {
  return (
    <ErrorPage
      status={500}
      title="Serverfehler"
      message="Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie den Support, wenn das Problem weiterhin besteht."
      icon={<FiServer className="text-6xl text-red-500" />}
    />
  );
};

export default ServerError; 