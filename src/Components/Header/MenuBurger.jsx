import "../../styles/Header/MenuBurger.css";
import React, { useState } from "react";

const MenuBurger = () => {
   const [showLinks, setShowLinks] = useState(false);

   const handleShowLinks = () => {
      setShowLinks(!showLinks);
   };

   return (
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
         <ul className="navbar__links">
            <li className="navbar__item">
               <a href="#" className="navbar__link">
                  Accueil
               </a>
            </li>
            <li className="navbar__item">
               <a href="#" className="navbar__link">
                  Teams
               </a>
            </li>
            <li className="navbar__item">
               <a href="#" className="navbar__link">
                  Accueil
               </a>
            </li>
            <li className="navbar__item">
               <a href="#" className="navbar__link">
                  Accueil
               </a>
            </li>
         </ul>
         <button className="navbar__burger" onClick={handleShowLinks}>
            Menu
         </button>
      </nav>
   );
};

export default MenuBurger;
