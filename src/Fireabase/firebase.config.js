// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3LPZfMJOKNKH_P7vSdn2IdDNBYSbm08M",
  authDomain: "coffee-store-app-865a5.firebaseapp.com",
  projectId: "coffee-store-app-865a5",
  storageBucket: "coffee-store-app-865a5.firebasestorage.app",
  messagingSenderId: "905094753333",
  appId: "1:905094753333:web:93e9c11fefd41f2d41d57c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
