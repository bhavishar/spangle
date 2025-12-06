import React from "react";
import "../styles/features.css";

export default function Features() {
  const features = [
    {
      title: "Creative Strategy",
      desc: "We help brands shape their story with clarity and impactful direction.",
      icon: "🎨",
    },
    {
      title: "Digital Solutions",
      desc: "Modern websites, user experiences, and marketing systems that drive growth.",
      icon: "💻",
    },
    {
      title: "Brand Identity",
      desc: "Logos, visuals, typography, and messaging crafted with purpose.",
      icon: "✨",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-wrapper">

        <h2 className="features-title">Why Choose Us</h2>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-name">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
