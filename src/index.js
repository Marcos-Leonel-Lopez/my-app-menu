import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0lTiZ8cF0z3PLPvG8OHbevOKJXR5w36Y",
  authDomain: "my-menu-3b045.firebaseapp.com",
  projectId: "my-menu-3b045",
  storageBucket: "my-menu-3b045.appspot.com",
  messagingSenderId: "1064813058027",
  appId: "1:1064813058027:web:b90a91413eb1e779276bae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

