import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import ImageState from "./context/images/ImageState";
ReactDOM.render(
  <React.StrictMode>
    <ImageState>
      <App />
    </ImageState>
  </React.StrictMode>,
  document.getElementById("root")
);
