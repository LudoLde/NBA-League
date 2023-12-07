import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Accueil from "./Pages/Accueil";
import DivisionsPage from "./Pages/DivisionsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/allteams" element={<DivisionsPage />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
