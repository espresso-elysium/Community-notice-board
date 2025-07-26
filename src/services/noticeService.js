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

// ✅ Add a new notice to Firestore
export const addNotice = async (noticeData) => {
  try {
    if (!noticeData.title || !noticeData.category || !noticeData.description) {
      throw new Error('Missing required fields');
    }

    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...noticeData,
      createdAt: serverTimestamp()
      // ✅ removed custom id: Date.now().toString()
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding notice:', error);
    return { success: false, error: error.message };
  }
};

// ✅ Get all notices (one-time fetch)
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
        id: doc.id, // ✅ true Firestore ID
        ...doc.data()
      });
    });

    return { success: true, notices };
  } catch (error) {
    console.error('Error getting notices:', error);
    return { success: false, error: error.message, notices: [] };
  }
};

// ✅ Real-time listener for notices
export const onNoticesSnapshot = (callback) => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('createdAt', 'desc'),
      limit(MAX_NOTICES)
    );

    return onSnapshot(
      q,
      (querySnapshot) => {
        const notices = [];
        querySnapshot.forEach((doc) => {
          notices.push({
            id: doc.id, // ✅ true Firestore ID
            ...doc.data()
          });
        });
        callback(notices);
      },
      (error) => {
        console.error('Firestore listener error:', error);
        callback([]);
      }
    );
  } catch (error) {
    console.error('Error setting up listener:', error);
    return () => {};
  }
};

// ✅ Delete a notice from Firestore
export const deleteNotice = async (noticeId) => {
  try {
    if (!noticeId) throw new Error('Notice ID is required');

    const docRef = doc(db, COLLECTION_NAME, noticeId);
    await deleteDoc(docRef);

    console.log('Document deleted successfully');
    return { success: true };
  } catch (error) {
    console.error('Error deleting notice:', error);
    return { success: false, error: error.message };
  }
};
