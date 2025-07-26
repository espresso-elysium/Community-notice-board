import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app; 