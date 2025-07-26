import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  orderBy, 
  query, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION_NAME = 'notices';

// Add a new notice to Firestore
export const addNotice = async (noticeData) => {
  try {
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

// Get all notices from Firestore
export const getNotices = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
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

// Delete a notice from Firestore
export const deleteNotice = async (noticeId) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, noticeId));
    return { success: true };
  } catch (error) {
    console.error('Error deleting notice:', error);
    return { success: false, error: error.message };
  }
}; 