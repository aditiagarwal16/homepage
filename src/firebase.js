

// Import the Firebase modules you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // If you are using Firestore
import { getStorage } from 'firebase/storage'; // If you are using Cloud Storage
import { getAuth } from 'firebase/auth'; // If you are using Firebase Auth

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACzau03t8lIR5fSpo1Au5Hmo3jQwk7HiM",
    authDomain: "task7-1p-8fe3a.firebaseapp.com",
    projectId: "task7-1p-8fe3a",
    storageBucket: "task7-1p-8fe3a.appspot.com",
    messagingSenderId: "751752493775",
    appId: "1:751752493775:web:407a8b43393639b3c815ba",
    measurementId: "G-J8PRD9EDRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase services you need
export const db = getFirestore(app); // Firestore
export const storage = getStorage(app); // Cloud Storage
export const auth = getAuth(app); // Firebase Auth
