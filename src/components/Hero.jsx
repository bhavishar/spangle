import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT SIDE TEXT */}
        <div className="hero-left">
          <h1>
            Curating Digital <br />
            Storytelling Experiences
          </h1>

          <p>
            We help brands connect through strategic digital consulting that creates
            emotion and social resonance.
          </p>

          <button className="hero-btn">
            Get Started Now →
          </button>
        </div>

        {/* RIGHT SIDE IMAGE GRID */}
        {/*<div className="hero-right">
          <div className="grid g1"></div>
          <div className="grid g2"></div>
          <div className="grid g3"></div>
          <div className="grid g4"></div>
          <div className="grid g5"></div>
        </div>*/}

      </div>
    </section>
  );
}
