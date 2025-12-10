import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOFhO1zfkv1mI1Yy-m3XIX-abfGvsdcII",
  authDomain: "online-study-group-a76fd.firebaseapp.com",
  projectId: "online-study-group-a76fd",
  storageBucket: "online-study-group-a76fd.appspot.com",
  messagingSenderId: "70934190920",
  appId: "1:70934190920:web:2a377883d5648480c1717d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
