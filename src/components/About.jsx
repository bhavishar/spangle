import React from "react";
import "../styles/about.css";
import gona from "../assets/Gona.webp";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">

        {/* LEFT SIDE */}
        <div className="about-left">
          <div className="about-tag">TRUSTED BY</div>

          <h2 className="about-heading">The giants, loved by the bold!</h2>

          <p className="about-text">
            From global icons to emerging names, our storytelling approach 
            has helped brands scale visibility and trust in the digital era.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="about-right">
          <img src={gona} alt="Trusted logos" className="about-image" />
        </div>

      </div>
    </section>
  );
}
