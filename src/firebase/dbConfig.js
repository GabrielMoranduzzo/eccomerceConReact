import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA91b4SshaP-v8O9NRzUaZZ4CP1ld48Hio",
  authDomain: "ecommerceconreact-c79c0.firebaseapp.com",
  projectId: "ecommerceconreact-c79c0",
  storageBucket: "ecommerceconreact-c79c0.appspot.com",
  messagingSenderId: "711677237227",
  appId: "1:711677237227:web:1c28530c163fc60d346bae"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}