
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Añadido para autenticación
import { getFirestore } from "firebase/firestore"; // Opcional: si usas base de datos
import { getStorage } from "firebase/storage"; // Opcional: si usas almacenamiento



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPAw7unRIsKMaGqWsFyBJ86zHUyE8bUqI",
  authDomain: "utp-lite.firebaseapp.com",
  projectId: "utp-lite",
  storageBucket: "utp-lite.firebasestorage.app",
  messagingSenderId: "348002227994",
  appId: "1:348002227994:web:428981602e916351e13ea3",
  measurementId: "G-RMXQE58E59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar servicios que vayas a usar
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exportar los servicios que uses en tu app
export { app, auth, db, storage, analytics };