import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnYM5RqXI3mahj4gKnUDvvpV2blrFt2sg",
  authDomain: "my-chat-d3c24.firebaseapp.com",
  projectId: "my-chat-d3c24",
  storageBucket: "my-chat-d3c24.appspot.com",
  messagingSenderId: "87976317788",
  appId: "1:87976317788:web:6fb893bbeb785d965a6799",
  measurementId: "G-WTR7L00LXM",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth, db };
