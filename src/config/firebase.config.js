// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxHpPV9xIEqRAH3m2BYuBidHr5VU4VUfU",
  authDomain: "moments-ink.firebaseapp.com",
  projectId: "moments-ink",
  storageBucket: "moments-ink.appspot.com",
  messagingSenderId: "429324775107",
  appId: "1:429324775107:web:ca4230701f8411cbfd7c76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;