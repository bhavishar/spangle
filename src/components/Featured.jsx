import React from "react";
import { motion } from "framer-motion";
import "../styles/featured.css";

export default function Featured() {
  return (
    <section className="featured" id="about">
      <motion.div
        className="featured-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="tag">FEATURED IN</span>

        <h2>The giants, loved by the bold!</h2>

        <p>
          From digital leaders and influencers to pioneering agencies, our work
          defines impactful digital visibility and human-first brand alignment.
        </p>
      </motion.div>
    </section>
  );
}
