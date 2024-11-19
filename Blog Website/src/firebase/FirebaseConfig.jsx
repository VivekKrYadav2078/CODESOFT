// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-AxOzA6j8mLsy1Hdki4k-IhOXfkZGmYA",
  authDomain: "first-blog-web.firebaseapp.com",
  projectId: "first-blog-web",
  storageBucket: "first-blog-web.firebasestorage.app",
  messagingSenderId: "132265474731",
  appId: "1:132265474731:web:0cddd8b3819cd9124d55ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb=getFirestore(app);
const auth = getAuth(app);
const storage=getStorage(app)
export {fireDb,auth,storage};