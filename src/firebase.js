import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
//import { createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyDmompSKLQ3bY8BAYnm7-KvCj1tISWwhY0",
   authDomain: "like-whatsapp-e009a.firebaseapp.com",
   projectId: "like-whatsapp-e009a",
   storageBucket: "like-whatsapp-e009a.appspot.com",
   messagingSenderId: "629159362966",
   appId: "1:629159362966:web:48421148f36d92283a5db7",
   measurementId: "G-MXR80C4CNR"
 };

 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };