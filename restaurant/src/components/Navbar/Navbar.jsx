import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
function Navbar({ setShowLogin }) {
  const [active, setActive] = useState("home");
  const { getNumberOfProducts } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="website logo" className="logo" />
      </Link>
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
          <Link to="/cart">
            <img src={assets.basket_icon} alt="icon" />
          </Link>
          <div className={getNumberOfProducts() ? "dot" : ""}>
            {getNumberOfProducts() > 0 ? getNumberOfProducts() : ""}
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
