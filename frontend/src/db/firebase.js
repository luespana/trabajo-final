// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkiG_iRYj5kOGfUuH6Xc485b9OGD_coW8",
  authDomain: "filmfinity-project.firebaseapp.com",
  projectId: "filmfinity-project",
  storageBucket: "filmfinity-project.appspot.com",
  messagingSenderId: "689196509634",
  appId: "1:689196509634:web:26c3d56d1c84d2b40d4e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAll = async (col) => {
  const ref = collection(db, col);
  const snapshot = await getDocs(ref);
  const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return list;
};

export const getById = async (col, id) => {
  const docRef = doc(db, col, id);
  const data = await getDoc(docRef);
  return data.data();
};