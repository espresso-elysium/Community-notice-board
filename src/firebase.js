import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXf2wKEhU9IeiA8tmhC5akeW_gEK6fqW0",
  authDomain: "community-notice-board-caaf0.firebaseapp.com",
  databaseURL: "https://community-notice-board-caaf0-default-rtdb.firebaseio.com",
  projectId: "community-notice-board-caaf0",
  storageBucket: "community-notice-board-caaf0.firebasestorage.app",
  messagingSenderId: "532567574803",
  appId: "1:532567574803:web:87bdd3b8bd46b34e2a72e6",
  measurementId: "G-4NQ00HCMPF"
};

// Validate Firebase config
const validateConfig = (config) => {
  const required = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
  const missing = required.filter(key => !config[key]);

  if (missing.length > 0) {
    throw new Error(`Missing Firebase config: ${missing.join(', ')}`);
  }

  return true;
};

// Initialize Firebase with error handling
let app;
let db;

try {
  validateConfig(firebaseConfig);
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);

  // Log successful initialization
  console.log('Firebase initialized successfully');

  // In development, you can connect to emulator
  if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_USE_EMULATOR) {
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('Connected to Firestore emulator');
  }

} catch (error) {
  console.error('Firebase initialization failed:', error);
  throw error;
}

export { db };
export default app; 