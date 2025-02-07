import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa-4PsDtEHecDs4SdBP7fcYYz8DYomcNg",
  authDomain: "blog-b77de.firebaseapp.com",
  projectId: "blog-b77de",
  storageBucket: "blog-b77de.firebasestorage.app",
  messagingSenderId: "851556770978",
  appId: "1:851556770978:web:19e29cc617521ceb33e3fb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export { db };