import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// TODO: Place this somewhere else
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBPGNoCkIz9QYxVpRK0LuvfI3l8f7tjS14",
    authDomain: "firebinged.firebaseapp.com",
    projectId: "firebinged",
    storageBucket: "firebinged.appspot.com",
    messagingSenderId: "139777741263",
    appId: "1:139777741263:web:16fb40d1e7d3a01b8442ba"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
