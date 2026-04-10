import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDXKcWAG-Elpl2NwuNoQ7Ao86SlcER1L34',
  authDomain: 'learnlingo-21254.firebaseapp.com',
  databaseURL:
    'https://learnlingo-21254-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learnlingo-21254',
  storageBucket: 'learnlingo-21254.appspot.com',
  messagingSenderId: '1089734280793',
  appId: '1:1089734280793:web:9b20acc99b9fcfe4549348',
  measurementId: 'G-HWNKFNT9XN',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
