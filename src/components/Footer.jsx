import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* LEFT SIDE */}
        <div className="footer-left">
          © Copyright 2025. All rights reserved
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="footer-social">

          {/* FACEBOOK */}
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" fill="#f2910d" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" fill="#f2910d" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>

          {/* LINKEDIN */}
          <a href="#" aria-label="LinkedIn">
            <svg width="20" height="20" fill="#f2910d" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.881 3.881 6 2.5 6S0 4.881 0 3.5 1.119 1 2.5 1 4.98 2.119 4.98 3.5zM.24 8h4.52v14H.24V8zm7.26 0h4.33v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.52v-6.84c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.78-2.62 3.6V22H7.5V8z"/>
            </svg>
          </a>

        </div>

      </div>

    </footer>
  );
}
