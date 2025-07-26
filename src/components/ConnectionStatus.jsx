import React, { useState, useEffect } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';

function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [isFirebaseConnected, setIsFirebaseConnected] = useState(true);

  useEffect(() => {
    // Monitor internet connection
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Monitor Firebase connection
    const unsubscribe = onSnapshot(doc(db, 'notices', 'connection-test'), 
      () => {
        setIsFirebaseConnected(true);
      },
      (error) => {
        console.error('Firebase connection error:', error);
        setIsFirebaseConnected(false);
      }
    );

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      unsubscribe();
    };
  }, []);

  if (isOnline && isFirebaseConnected) {
    return null; // Don't show anything if everything is working
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      {!isOnline && (
        <div className="bg-red-500 text-white px-4 py-2 rounded shadow-lg mb-2">
          ⚠️ No internet connection
        </div>
      )}
      {!isFirebaseConnected && (
        <div className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg">
          ⚠️ Database connection issue
        </div>
      )}
    </div>
  );
}

export default ConnectionStatus; 