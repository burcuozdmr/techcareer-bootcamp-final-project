import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FilterProvider } from "./store/filter-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
