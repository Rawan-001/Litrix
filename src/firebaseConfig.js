import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCCmuRtiSrAn0eA2dFZyKxuPfFOFtp-jW0",
  authDomain: "litrix-f06e0.firebaseapp.com",
  databaseURL: "https://litrix-f06e0-default-rtdb.firebaseio.com",
  projectId: "litrix-f06e0",
  storageBucket: "litrix-f06e0.appspot.com",
  messagingSenderId: "956508621991",
  appId: "1:956508621991:web:9bbf84a244fd8370495f82"
};
// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);  

export { auth, db };




