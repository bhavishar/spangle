import React from "react";
import "../styles/contactform.css";

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">

        {/* Contact Tag */}
        <div className="contact-tag">CONTACT US</div>

        {/* Heading */}
        <h2 className="contact-heading">
          Let’s Build Something Worth <br /> Talking About!
        </h2>

        {/* Subtitle */}
        <p className="contact-subtext">
          Got a vision? Let’s shape it into a story the world can’t stop sharing.
        </p>

        {/* Form */}
        <form className="contact-form">
          <div className="form-row">
            <div className="form-field">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-field">
              <label>Contact Email</label>
              <input type="email" placeholder="Enter your email address" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Company Name</label>
              <input type="text" placeholder="Enter your company name" />
            </div>

            <div className="form-field">
              <label>Country</label>
              <input type="text" placeholder="Select your country" />
            </div>
          </div>

          <div className="form-field full">
            <label>Your Message</label>
            <textarea placeholder="Tell us more about what are you looking for ?" />
          </div>

          <button type="submit" className="contact-submit">
            <span>Send Message</span>
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
