import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer" data-aos="fade-up">
      <div className="footer-inner">
        <div className="brand">
          <div className="badge">IN</div>
          <div>
            <strong>SpangLe</strong>
            <div className="muted">Creative • Strategy • Growth</div>
          </div>
        </div>

        <div className="footer-right">
          <div>Follow us: 📷 💼 💬</div>
        </div>
      </div>

      <div className="copyright">© 2025 India Intentions — All Rights Reserved.</div>
    </footer>
  );
}
