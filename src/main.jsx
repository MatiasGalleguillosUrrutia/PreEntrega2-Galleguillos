import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ItemProvider } from "./contexts/ItemContext"; // Importa el ItemProvider

import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyCtZOCtNibGS00m89mXfkMziPZkiOwFLwY",
  authDomain: "academia-de-danza-b3473.firebaseapp.com",
  projectId: "academia-de-danza-b3473",
  storageBucket: "academia-de-danza-b3473.appspot.com",
  messagingSenderId: "649408332702",
  appId: "1:649408332702:web:54b0cb6d34dd7c0cdc0c8f",
  measurementId: "G-TLS8990Q0S",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemProvider> {/* Envuelve tu aplicación con ItemProvider */}
      <App />
    </ItemProvider>
  </React.StrictMode>
);
