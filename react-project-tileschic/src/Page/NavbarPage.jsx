import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function NavbarPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleDropdown = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className={`nav-bar ${isNavVisible ? "visible" : " "}`}>
      <ul className="nav-link">
        <details class="dropdown">
          <summary>Menu</summary>

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
            <NavLink className="hover-effect" to={"/select"}>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink className="hover-effect" to={"/fav-page"}>
              Your Favorites
            </NavLink>
          </li>
          <li>
            <NavLink className="hover-effect" to={"/creations"}>
              Creations
            </NavLink>
          </li>
        </details>
      </ul>
    </nav>
  );
}

export default NavbarPage;
