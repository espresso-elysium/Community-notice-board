import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
  onSnapshot,
  limit
} from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION_NAME = 'notices';
const MAX_NOTICES = 100; // Limit to prevent performance issues

// Add a new notice to Firestore
export const addNotice = async (noticeData) => {
  try {
    // Validate data before sending
    if (!noticeData.title || !noticeData.category || !noticeData.description) {
      throw new Error('Missing required fields');
    }

    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...noticeData,
      createdAt: serverTimestamp(),
      id: Date.now().toString() // Fallback ID
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding notice:', error);
    return { success: false, error: error.message };
  }
};

// Get all notices from Firestore (one-time fetch)
export const getNotices = async () => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('createdAt', 'desc'),
      limit(MAX_NOTICES)
    );
    const querySnapshot = await getDocs(q);
    const notices = [];
    querySnapshot.forEach((doc) => {
      notices.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return { success: true, notices };
  } catch (error) {
    console.error('Error getting notices:', error);
    return { success: false, error: error.message, notices: [] };
  }
};

// Real-time listener for notices with performance optimization
export const onNoticesSnapshot = (callback) => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('createdAt', 'desc'),
      limit(MAX_NOTICES)
    );

    return onSnapshot(q, (querySnapshot) => {
      const notices = [];
      querySnapshot.forEach((doc) => {
        notices.push({
          id: doc.id,
          ...doc.data()
        });
      });
      callback(notices);
    }, (error) => {
      console.error('Firestore listener error:', error);
      callback([]); // Return empty array on error
    });
  } catch (error) {
    console.error('Error setting up listener:', error);
    return () => { }; // Return empty cleanup function
  }
};

// Delete a notice from Firestore
export const deleteNotice = async (noticeId) => {
  try {
    console.log('deleteNotice called with ID:', noticeId);
    console.log('Firebase db object:', db);

    if (!noticeId) {
      throw new Error('Notice ID is required');
    }

    const docRef = doc(db, COLLECTION_NAME, noticeId);
    console.log('Document reference:', docRef);

    await deleteDoc(docRef);
    console.log('Document deleted successfully');
    return { success: true };
  } catch (error) {
    console.error('Error deleting notice:', error);
    console.error('Error details:', {
      code: error.code,
      message: error.message,
      stack: error.stack
    });
    return { success: false, error: error.message };
  }
}; 