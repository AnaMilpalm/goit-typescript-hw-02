// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
