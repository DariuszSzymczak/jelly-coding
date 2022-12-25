import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJBoSf2BbCgteF11gTG9im_BPDoQfwGxk",
  authDomain: "jelly-coding.firebaseapp.com",
  databaseURL: "https://jelly-coding-default-rtdb.firebaseio.com",
  projectId: "jelly-coding",
  storageBucket: "jelly-coding.appspot.com",
  messagingSenderId: "461299718539",
  appId: "1:461299718539:web:242efb2f83c737241cb78e",
  measurementId: "G-EHBCMGVMJ9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
