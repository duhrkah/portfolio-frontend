import React from 'react';
import ErrorPage from '../../components/ErrorPage';
import { FiServer } from 'react-icons/fi';

const BadGateway = () => {
  return (
    <ErrorPage
      status={502}
      title="Bad Gateway"
      message="Der Server hat eine ungültige Antwort von einem Upstream-Server erhalten. Bitte versuchen Sie es später erneut."
      icon={<FiServer className="text-6xl text-yellow-500" />}
    />
  );
};

export default BadGateway; 