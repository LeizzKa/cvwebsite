import React from "react";
import ReactDOM from "react-dom/client";
import PersonalInfo from "./components/personalInfo";
import Navbar from "./components/navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <PersonalInfo />
  </React.StrictMode>
);
