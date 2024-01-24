import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "devblock-blog.firebaseapp.com",
  projectId: "devblock-blog",
  storageBucket: "devblock-blog.appspot.com",
  messagingSenderId: "395375539282",
  appId: "1:395375539282:web:cedfcb03bbd6bcf1639b8b",
};

export const app = initializeApp(firebaseConfig);
