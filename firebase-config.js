import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCw2ygpfB1pa5hPiyeaTj6tMr6fvnagi_k",
    authDomain: "weshare-f9948.firebaseapp.com",
    projectId: "weshare-f9948",
    storageBucket: "weshare-f9948.appspot.com",
    messagingSenderId: "608135745371",
    appId: "1:608135745371:web:98241da92e76ce212a547e"
  };

// Initialize Firebase
const firebaseApplication = initializeApp(firebaseConfig);
const firebaseStorage = getStorage();
const firebaseDatabase = getDatabase();

export { firebaseStorage, firebaseDatabase };