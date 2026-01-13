import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const savedTheme =
  localStorage.getItem("portfolio-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const savedLang = localStorage.getItem("portfolio-language") || "pt";
document.documentElement.lang = savedLang;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
