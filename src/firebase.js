import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9PZkQLZ-Pv9K0dkRIF6MpPWi2ofoLlM8",
  authDomain: "samuel-plan-biblico-1.firebaseapp.com",
  projectId: "samuel-plan-biblico-1",
  storageBucket: "samuel-plan-biblico-1.firebasestorage.app",
  messagingSenderId: "68912140952",
  appId: "1:68912140952:web:7e1375c3f99204d7b3b6ed"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
