import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavbarPage() {
  return (
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery/:id"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/select"}>Selected Piece</NavLink>
      </li>
      <li>
        <NavLink to={"/fav-page"}>Your Favorites</NavLink>
      </li>
    </ul>
  );
}

export default NavbarPage;
