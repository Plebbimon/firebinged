import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPGNoCkIz9QYxVpRK0LuvfI3l8f7tjS14",
    authDomain: "firebinged.firebaseapp.com",
    projectId: "firebinged",
    storageBucket: "firebinged.appspot.com",
    messagingSenderId: "139777741263",
    appId: "1:139777741263:web:16fb40d1e7d3a01b8442ba"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;