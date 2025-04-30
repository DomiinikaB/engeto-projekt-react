import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonActiveLink"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/destinations"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonActiveLink"
        }
      >
        Destinations
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "activeLink" : "nonActiveLink"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
