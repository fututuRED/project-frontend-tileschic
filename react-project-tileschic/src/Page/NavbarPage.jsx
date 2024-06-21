import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavbarPage() {
  return (
    <ul className="nav-link">
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
    </ul>
  );
}

export default NavbarPage;
