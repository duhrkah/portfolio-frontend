import React from 'react';
import ErrorPage from '../../components/ErrorPage';
import { FiLock } from 'react-icons/fi';

const Unauthorized = () => {
  return (
    <ErrorPage
      status={403}
      title="Zugriff verweigert"
      message="Sie haben keine Berechtigung, auf diese Seite zuzugreifen. Bitte wenden Sie sich an einen Administrator, wenn Sie der Meinung sind, dass dies ein Fehler ist."
      icon={<FiLock className="text-6xl text-red-500" />}
      showLoginButton={true}
    />
  );
};

export default Unauthorized; 