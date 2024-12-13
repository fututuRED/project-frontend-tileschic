import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../css/Home.css";
function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMenu = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className="nav-bar">
      <button className="menu-button" onClick={handleMenu}>
        Menu
      </button>
      <ul className={`nav-link ${isNavVisible ? "visible" : " "}`}>
        <li>
          <NavLink className="hover-effect" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover-effect" to={"/gallery"}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink className="hover-effect" to={"/fav-page"}>
            Your Favorites
          </NavLink>
        </li>
        <li>
          <NavLink className="hover-effect" to={"/creation"}>
            Creation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
