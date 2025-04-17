import React from 'react';
import ErrorPage from '../../components/ErrorPage';
import { FiShield } from 'react-icons/fi';

const RequiresAuth = () => {
  return (
    <ErrorPage
      status={401}
      title="Anmeldung erforderlich"
      message="Sie müssen angemeldet sein, um auf diese Seite zugreifen zu können. Bitte melden Sie sich an, um fortzufahren."
      icon={<FiShield className="text-6xl text-blue-500" />}
      showLoginButton={true}
    />
  );
};

export default RequiresAuth; 