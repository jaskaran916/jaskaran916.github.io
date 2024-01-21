// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqKUAlMnAO94SptQojfSRfrsTPiQ7Hl24",
  authDomain: "online-bookstore-e6acf.firebaseapp.com",
  projectId: "online-bookstore-e6acf",
  storageBucket: "online-bookstore-e6acf.appspot.com",
  messagingSenderId: "200675096009",
  appId: "1:200675096009:web:3f614dd09ed54f05bd6418",
  measurementId: "G-5F8TGKLHD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);