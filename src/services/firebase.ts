import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { DocumentData, WithFieldValue, doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { Progress } from 'src/models/progress';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_AUTH_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

const userDocRef = () => {
  if (!auth.currentUser) throw new Error('User is not authenticated');

  return doc(db, 'users', auth.currentUser.uid);
};

export class FireStoreService {
  static getUserData = async () => {
    return (await getDoc(userDocRef())).data();
  };
  static setProgress = async (data: WithFieldValue<DocumentData>) => {
    return await setDoc(userDocRef(), data);
  };

  static addProgress = async (value: Progress) => {
    return await updateDoc(userDocRef(), value);
  };

  static updateProgress = async (targetField: string, value: number) => {
    return await updateDoc(userDocRef(), {
      [targetField]: value,
    });
  };
}

export const addAdminRole = httpsCallable(functions, 'addAdminRole');
