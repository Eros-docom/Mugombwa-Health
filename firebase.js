
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFEp6T416RfeLt-k7B37NclqY7RRWrUEE",
  authDomain: "health-centre-staff-portal.firebaseapp.com",
  projectId: "health-centre-staff-portal",
  storageBucket: "health-centre-staff-portal.firebasestorage.app",
  messagingSenderId: "605789424799",
  appId: "1:605789424799:web:83c9dcc3f6e73273d366aa",
  measurementId: "G-JPPW2P6PEJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
