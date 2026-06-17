import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7oJLdIhGV-PAPP_ZFHfIR_C5V7MSX9aI",
  authDomain: "healthconnect-82b2c.firebaseapp.com",
  projectId: "healthconnect-82b2c",
  storageBucket: "healthconnect-82b2c.firebasestorage.app",
  messagingSenderId: "335819754231",
  appId: "1:335819754231:web:ac852e81c72138d811e1f2"
};

const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);