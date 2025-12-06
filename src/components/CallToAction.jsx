import React from "react";
import "../styles/cta.css";

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-box">

        <h2 className="cta-title">Let’s Build Something Great Together</h2>
        <p className="cta-desc">
          Elevate your brand with modern design, meaningful strategy, and 
          powerful digital experiences tailored to your goals.
        </p>

        <button className="cta-btn">Start Your Project</button>

      </div>
    </section>
  );
}
