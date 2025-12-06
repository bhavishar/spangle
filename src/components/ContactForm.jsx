import React from "react";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="contact-section" id="contact">
      <style>{`
        /* Section Background */
        .contact-section {
          background: #eef4f2;
          padding: 80px 0;
          display: flex;
          justify-content: center;
        }

        /* White Card */
        .contact-card {
          background: white;
          width: 90%;
          max-width: 1100px;
          padding: 70px 60px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          text-align: center;
        }

        /* Orange Tag */
        .contact-tag {
          background: #ffead5;
          color: #d97706;
          padding: 8px 18px;
          font-size: 14px;
          border-radius: 25px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 20px;
        }

        /* Heading */
        .contact-heading {
          font-size: 34px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        /* Subtitle */
        .contact-subtext {
          color: #6b7280;
          margin-bottom: 40px;
          font-size: 16px;
        }

        /* Form */
        .contact-form {
          width: 100%;
        }

        .form-row {
          display: flex;
          gap: 25px;
          margin-bottom: 25px;
        }

        .form-field {
          width: 100%;
          text-align: left;
        }

        .form-field label {
          font-weight: 600;
          font-size: 14px;
          display: block;
          margin-bottom: 6px;
          color: #1f2937;
        }

        .form-field input,
        .form-field textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 15px;
          font-family: "DM Sans", sans-serif;
          box-sizing: border-box;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          font-family: "DM Sans", sans-serif;
        }

        textarea {
          min-height: 130px;
          resize: none;
        }

        .full {
          margin-bottom: 30px;
        }

        /* Submit Button */
        .contact-submit {
          background: #e87f0c;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: 0.2s;
          font-family: "DM Sans", sans-serif;
        }

        .contact-submit:hover {
          background: #c96a07;
        }

        .arrow-icon {
          width: 16px;
          fill: white;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .contact-section {
            padding: 40px 0;
          }

          .contact-card {
            width: 95%;
            padding: 40px 24px;
            border-radius: 16px;
          }

          .contact-tag {
            font-size: 12px;
            padding: 6px 14px;
            margin-bottom: 16px;
          }

          .contact-heading {
            font-size: 24px;
            margin-bottom: 12px;
          }

          .contact-heading br {
            display: none;
          }

          .contact-subtext {
            font-size: 14px;
            margin-bottom: 30px;
          }

          .form-row {
            flex-direction: column;
            gap: 20px;
            margin-bottom: 20px;
          }

          .form-field label {
            font-size: 13px;
            margin-bottom: 5px;
          }

          .form-field input,
          .form-field textarea {
            padding: 12px;
            font-size: 14px;
          }

          textarea {
            min-height: 100px;
          }

          .full {
            margin-bottom: 24px;
          }

          .contact-submit {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .contact-card {
            padding: 30px 20px;
          }

          .contact-heading {
            font-size: 22px;
          }

          .contact-subtext {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="contact-card">
        {/* Contact Tag */}
        <div className="contact-tag">CONTACT US</div>
        
        {/* Heading */}
        <h2 className="contact-heading">
          Let's Build Something Worth <br /> Talking About!
        </h2>
        
        {/* Subtitle */}
        <p className="contact-subtext">
          Got a vision? Let's shape it into a story the world can't stop sharing.
        </p>
        
        {/* Form */}
        <div className="contact-form">
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
          
          <button onClick={handleSubmit} className="contact-submit">
            <span>Send Message</span>
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}