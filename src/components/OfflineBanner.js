
import React, { useEffect, useState } from 'react';

function OfflineBanner() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  return !isOnline ? (
    <div className="offline-banner">
      Estás offline. Algunas funciones están limitadas.
    </div>
  ) : null;
}

export default OfflineBanner;