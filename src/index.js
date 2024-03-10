import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import TodoProvider from "./context/mainContext";
const ROOT = ReactDOM.createRoot(document.getElementById("main"));
ROOT.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
