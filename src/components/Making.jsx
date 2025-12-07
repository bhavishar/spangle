import React, { useEffect, useRef } from "react";
import img1 from "../assets/image1.webp";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image3.webp";
import img4 from "../assets/image4.webp";

export default function Making() {
  const rowsRef = useRef([]);

  useEffect(() => {
    const rows = rowsRef.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2, rootMargin: "-50px 0px -50px 0px" }
    );

    rows.forEach((row) => row && observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="making" className="making">
      <style>{`
        .making {
          background: #FDF1E7;
          padding: 80px 20px;
        }

        .making-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .making-title {
          text-align: center;
          font-family: "DM Sans", Sans-serif;
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #121216;
        }

        .section-description {
          max-width: 700px;
          margin: 0 auto 80px auto;
          text-align: center;
          font-size: 18px;
          color: #333;
          line-height: 1.7;
        }

        .make-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
        }

        .make-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .make-row.reverse {
          direction: rtl;
        }
        .make-row.reverse > * {
          direction: ltr;
        }

        .make-img {
          width: 100%;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .make-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* -------------------------
           TITLE WRAP WITH A SINGLE LINE
        -------------------------- */
        .title-wrap {
          position: relative;
          padding-left: 24px;
        }

        /* UNBROKEN ORANGE LINE */
        .title-wrap::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0; 
          width: 4px;
          background: #ff8c42;
          border-radius: 4px;
        }

        /* Remove spacing that breaks the line */
        .title-wrap h2,
        .title-wrap h3 {
          margin: 0;
          padding: 0;
        }

        .title-wrap h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #121216;
        }

        .title-wrap h3 {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .make-text p {
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
          color: #121216;
          margin-bottom: 25px;
        }

        .make-text ul {
          padding: 0;
          list-style: none;
        }

        .make-text ul li {
          font-size: 18px;
          padding: 10px 0;
          padding-left: 30px;
          position: relative;
          color: #2d2d33;
        }

        .make-text ul li::before {
          content: "*";
          position: absolute;
          left: 0;
          color: #ff8c42;
          font-size: 20px;
          display: flex;
          font-size: 64px;
          margin-block: -12px;
        }
            .howto {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 6px 14px;
  border-radius: 20px;
  background: #fff;
  color: #e7750a;
        margin-bottom: 25px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: fit-content;  /* IMPORTANT */
}


        @media (max-width: 968px) {
          .make-row,
          .make-row.reverse {
            grid-template-columns: 1fr;
            gap: 40px;
            direction: ltr;
          }

          .make-img {
            height: 300px;
          }

          .title-wrap h2 {
            font-size: 26px;
          }

          .title-wrap h3 {
            font-size: 20px;
          }
        }
      `}</style>

      <p className="howto">HOW WE DO IT</p>

      <div className="making-inner">
        <h2 className="making-title">Making it simpler for you</h2>
        <p className="section-description">
          We offer integrated communication services that help Indian start-ups scale with a strong identity and industry reputation.
        </p>

        {/* BLOCK 1 */}
        <div ref={(el) => (rowsRef.current[0] = el)} className="make-row">
          <div className="make-img">
            <img src={img1} alt="Research" />
          </div>
          <div className="make-text">
            <div className="title-wrap">
              <h1>We Research</h1>
              <h3>Deep Dives, Not Just Data.</h3>
            </div>
            <p>
              Before we tell your story, we learn it. Our team digs into your industry, competitors, and audiences to uncover white spaces, trends, and opportunities. This insight-first approach powers content that actually connects.
            </p>
            <ul>
              <li>Audience insight</li>
              <li>Brand audits</li>
              <li>Trend analysis</li>
              <li>Media landscape scanning</li>
            </ul>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div ref={(el) => (rowsRef.current[1] = el)} className="make-row reverse">
          <div className="make-img">
            <img src={img2} alt="Manage" />
          </div>
          <div className="make-text">
            <div className="title-wrap">
              <h2>We Manage</h2>
              <h3>From Strategy to Screens—We’ve Got It Covered.</h3>
            </div>
            <p>
              We become an extension of your team—handling PR outreach, media relationships, timelines, and creative deliverables. You stay focused on growth while we orchestrate every moving part.
            </p>
            <ul>
              <li>End-to-end PR coordination</li>
              <li>Campaign & calendar management</li>
              <li>Influencer & media liaisons</li>
              <li>Performance tracking</li>
            </ul>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div ref={(el) => (rowsRef.current[2] = el)} className="make-row">
          <div className="make-img">
            <img src={img3} alt="Work" />
          </div>
          <div className="make-text">
            <div className="title-wrap">
              <h2>We Work</h2>
              <h3>Collaboration That Feels Seamless.</h3>
            </div>
            <p>
              Working with us doesn’t feel like outsourcing—it feels like teaming up. We’re responsive, proactive, and plugged in to your business goals, making creative decisions feel easy and aligned.
            </p>
            <ul>
              <li>Agile collaboration</li>
              <li>Transparent reporting</li>
              <li>Slack/email integration</li>
              <li>On-brand execution</li>
            </ul>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div ref={(el) => (rowsRef.current[3] = el)} className="make-row reverse">
          <div className="make-img">
            <img src={img4} alt="Familiar" />
          </div>
          <div className="make-text">
            <div className="title-wrap">
              <h2>We Become Familiar</h2>
              <h3>We Don’t Just Know Your Brand—We Speak It Fluently.</h3>
            </div>
            <p>
              Our work reflects your voice, values, and vision because we immerse ourselves in them. The result? Messaging that feels intuitive, not outsourced—and stories that feel unmistakably you.
            </p>
            <ul>
              <li>Brand tone alignment</li>
              <li>Long-term partnerships</li>
              <li>Flexible onboarding</li>
              <li>Deep brand immersion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
