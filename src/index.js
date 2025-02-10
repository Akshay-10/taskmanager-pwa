import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./client/pages/login/Login.jsx";
import Home from "./client/pages/home/Home.jsx";
import { ThemeProvider } from "./shared/themes/ThemeContext.jsx";


const container = document.getElementById("root");
const root = createRoot(container); // Create a React root.
root.render(
  <React.StrictMode>
    <ThemeProvider initialTheme="light">
    <div className="flex h-[100vh] w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
