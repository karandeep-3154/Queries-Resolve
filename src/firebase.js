import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDSbl7vq9xghKEAU7Zq5kb3UPQQReXuYaI",
  authDomain: "chatting-app-33c61.firebaseapp.com",
  projectId: "chatting-app-33c61",
  storageBucket: "chatting-app-33c61.appspot.com",
  messagingSenderId: "747850279000",
  appId: "1:747850279000:web:95608f9fbdebd96389822d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()