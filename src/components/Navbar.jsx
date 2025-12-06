import React, { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* LOGO */}
        <h2 className="logo">SpangLe</h2>

        {/* RIGHT SECTION */}
        <div className="nav-right-group">

          {/* DESKTOP LINKS */}
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#making">Making</a>
            <a href="#services">Services</a>
          </div>

          {/* DESKTOP CONTACT BUTTON (now links to bottom form) */}
          <a href="#contact" className="contact-btn">Contact Us</a>

          {/* HAMBURGER ICON */}
          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#making" onClick={toggleMenu}>Making</a>
        <a href="#services" onClick={toggleMenu}>Services</a>

        {/* MOBILE CONTACT BUTTON (also links to bottom form) */}
        <a href="#contact" className="contact-btn mobile" onClick={toggleMenu}>
          Contact Us
        </a>
      </div>

    </nav>
  );
}
