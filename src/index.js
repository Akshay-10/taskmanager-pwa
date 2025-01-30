import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Container from "./components/Container/Container.jsx";

const container = document.getElementById("root");
const root = createRoot(container); // Create a React root.
root.render(
  <React.StrictMode>
    <div className="flex h-[100vh] w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
