// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const FirebaseConfig = {
  apiKey: "AIJASHfhfX9FU8o-eQHLfhfsudUFXfr-tHZ8FNek",
  authDomain: "domo-ut-a50a6.firebaseapp.com",
  projectId: "domo-ut-a5525g",
  storageBucket: "domo-ut-a50a6.appspot.com",
  messagingSenderId: "602424224424244",
  appId: "1:6024i24u2430684:web:d8948eh0df848538hfj"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}