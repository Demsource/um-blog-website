import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AppProvider from "./AppContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter basename="/um-blog-website">
        <App />
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);
