import { initializeApp } from 'firebase/app';
import {
   getAuth,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
   createUserWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyBLnBbDvx2KYh1Gtx1RzHHgoXatUloWdD4',
   authDomain: 'bookshelf-5abb7.firebaseapp.com',
   projectId: 'bookshelf-5abb7',
   storageBucket: 'bookshelf-5abb7.appspot.com',
   messagingSenderId: '532456118233',
   appId: '1:532456118233:web:224daf9bfa43d12556ebc8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// sign in with email and password
export async function signInUserWithEmail(email, password) {
   if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
}

// sign in with google
export async function signInUserWithGooglePopup() {
   return await signInWithPopup(auth, provider);
}

// sign up with email and password
export async function registerUserWithEmail(email, password) {
   if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
}

// Sign out
export async function signOutUser() {
   await signOut(auth);
}

// On Authentication change (sign in and out) - invokes a callback function
export const onAuthStateChangedListner = callback => onAuthStateChanged(auth, callback);
