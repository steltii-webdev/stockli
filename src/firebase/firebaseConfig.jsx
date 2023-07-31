// Import the required Firebase services
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBHKASNntZMK3d638hsIkZbnCWqwOamquM",
    authDomain: "stockli-d5aa5.firebaseapp.com",
    projectId: "stockli-d5aa5",
    storageBucket: "stockli-d5aa5.appspot.com",
    messagingSenderId: "1020661176444",
    appId: "1:1020661176444:web:37068efdff893ae0a351f9",
    measurementId: "G-LDEG69GPSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth and Database instances
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };