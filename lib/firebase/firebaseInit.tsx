import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDeEjpbkGyjPHv0pizr-wIEYjiOGIUPUI",
  authDomain: "bizcheck-6e101.firebaseapp.com",
  projectId: "bizcheck-6e101",
  storageBucket: "bizcheck-6e101.appspot.com",
  messagingSenderId: "975731435353",
  appId: "1:975731435353:web:d4716adc977bbc1dae8e48",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();

export const storage = getStorage();
