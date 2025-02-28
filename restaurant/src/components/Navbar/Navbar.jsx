import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [active, setActive] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="website logo" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          className={active == "home" ? "active" : ""}
          onClick={() => {
            setActive("home");
          }}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          className={active == "menu" ? "active" : ""}
          onClick={() => {
            setActive("menu");
          }}
        >
          menu
        </a>
        <a
          href="#app-download"
          className={active == "mobile-app" ? "active" : ""}
          onClick={() => {
            setActive("mobile-app");
          }}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          className={active == "contact-us" ? "active" : ""}
          onClick={() => {
            setActive("contact-us");
          }}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="icon" />
        <div className="navbar-cart-icon">
          <img src={assets.basket_icon} alt="icon" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
