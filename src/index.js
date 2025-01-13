import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

const container = document.getElementById("root");
const root = createRoot(container); // Create a React root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
