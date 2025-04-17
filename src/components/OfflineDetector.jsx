import { useEffect } from 'react';
import { useNotification } from '../context/NotificationContext';

const OfflineDetector = () => {
  const { showNotification } = useNotification();

  useEffect(() => {
    const handleOnline = () => {
      showNotification('Sie sind wieder online', 'success');
    };

    const handleOffline = () => {
      showNotification('Sie sind offline', 'error');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [showNotification]);

  return null;
};

export default OfflineDetector; 