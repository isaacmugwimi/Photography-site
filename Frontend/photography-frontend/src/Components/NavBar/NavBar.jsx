import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Lens.</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="book-now-btn">
          <button>
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
