import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LEFT SIDE LOGO */}
        <h2 className="logo">SpangLe</h2>

        {/* RIGHT SIDE MENU + BUTTON */}
        <div className="nav-right-group">

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
          </div>

          <button className="contact-btn">Contact Us</button>
        </div>

      </div>
    </nav>
  );
}
