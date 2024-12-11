// Importando o SDK do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC0HwlpOokj3JdcmvasAGk5vdZgQYB2jyg",
  authDomain: "chat-df458.firebaseapp.com",
  projectId: "chat-df458",
  storageBucket: "chat-df458.firebasestorage.app",
  messagingSenderId: "253138511670",
  appId: "1:253138511670:web:5b35392e02e3142adcb597"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando os serviços necessários
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

// Exportando as referências
export { auth, firestore, database };
