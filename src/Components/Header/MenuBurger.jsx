import "../../styles/Header/MenuBurger.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuBurger = () => {
   const [showLinks, setShowLinks] = useState(false);

   const handleShowLinks = () => {
      setShowLinks(!showLinks);
   };

   return (
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
         <ul className="navbar__links">
            <li className="navbar__item">
               <Link to="/" className="navbar__link">
                  Accueil
               </Link>
            </li>
            <li className="navbar__item">
               <Link to="/AllTeams" className="navbar__link">
                  Teams
               </Link>
            </li>
            <li className="navbar__item">
               <Link to="/" className="navbar__link">
                  Accueil
               </Link>
            </li>
         </ul>
         <button className="navbar__burger" onClick={handleShowLinks}>
            Menu
         </button>
      </nav>
   );
};

export default MenuBurger;
