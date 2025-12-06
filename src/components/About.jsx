import React from "react";
import "../styles/about.css";

export default function About(){
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-inner">
        <div className="about-left">
          <h3>Trusted By</h3>
          <h2>The giants, loved by the bold!</h2>
          <p>From global teams to emerging brands, our storytelling helps brands get noticed.</p>
        </div>

        <div className="about-right">
          <div className="partners">
            <div className="logo">G</div>
            <div className="logo">O</div>
            <div className="logo">N</div>
            <div className="logo">A</div>
          </div>
        </div>
      </div>
    </section>
  );
}
