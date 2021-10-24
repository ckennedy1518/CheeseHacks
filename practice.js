// Import the functions you need from the SDKs you need
console.log("First line");
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBGvD6uoDp6zRsRDe5QHjvdAgnRNFEL7-4",
  authDomain: "practicecheese-4bcf5.firebaseapp.com",
  projectId: "practicecheese-4bcf5",
  storageBucket: "practicecheese-4bcf5.appspot.com",
  messagingSenderId: "974864217132",
  appId: "1:974864217132:web:5f7811e5bd412e8bfd4d89",
  measurementId: "G-Z7XFYRH593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = app.firestore();
//const analytics = getAnalytics(app);

const querySnapshot = await getDocs(collection(firestore, "texts"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.content}`);
});

