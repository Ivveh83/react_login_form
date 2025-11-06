import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} /> {/*Alla routes som börjar med /, dvs hela appen hanteras av komponenten <App />. Asterisken (/*) efter snedsträcket behövs för att de nästlade
          Route ska fungera.*/}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
