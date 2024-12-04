// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdmqBOJ5GVYmN4FFnOnJj0gXczIVTVvAc",
  authDomain: "coffee-store-71ae7.firebaseapp.com",
  projectId: "coffee-store-71ae7",
  storageBucket: "coffee-store-71ae7.firebasestorage.app",
  messagingSenderId: "409146349218",
  appId: "1:409146349218:web:108f9fa255ac36367ca9fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);