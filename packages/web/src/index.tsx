import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import ContactState from "./context/Contact/ContactState";
ReactDOM.render(
    <React.StrictMode>
        <ContactState>
            <App />
        </ContactState>
    </React.StrictMode>,
    document.getElementById("root")
);
