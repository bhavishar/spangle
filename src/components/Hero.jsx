import React from "react";
import "../styles/hero.css";
import heroImg from "../assets/sliderimage.webp";
import { motion } from "framer-motion";
 // <-- add your image here

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
            We help bold brands cut through the noise with digital storytelling 
            that connects, converts, and stays remembered.
          </p>

          <motion.button
  className="hero-btn"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.35 }}
>
  <span>Get Started</span>
  <svg
    aria-hidden="true"
    className="hero-arrow"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
  </svg>
</motion.button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right">
          <img src={heroImg} alt="Digital storytelling" />
        </div>

      </div>
    </section>
  );
}
