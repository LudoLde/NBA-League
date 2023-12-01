import "../../styles/Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import MenuBurger from "./MenuBurger";

const Header = () => {
   return (
      <header className="header-container">
         <button className="btn-header ">
            <FontAwesomeIcon icon={faBasketball} className="icon-header-design" />
            <p className="hidden-text">Logo basketball</p>
         </button>
         <MenuBurger />
         <button className="btn-header">
            <FontAwesomeIcon icon={faBasketball} className="icon-header-design" />
            <p className="hidden-text">Logo basketball</p>
         </button>
      </header>
   );
};

export default Header;
