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
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    rows.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="making" className="making">
      <style>{`
        .making {
          background: #f5e6d3;
          padding: 80px 20px;
        }

        .making-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .making-title {
          font-size: 48px;
          font-weight: 800;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 80px;
        }

        .make-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
          
          /* Slide up animation */
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
        }

        .make-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .make-row.reverse {
          opacity: 0;
          transform: translateY(60px);
        }

        .make-row.reverse.visible {
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
          display: block;
        }

        .make-text {
          padding: 20px;
        }

        .make-text h3 {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          border-left: 4px solid #ff8c42;
          padding-left: 20px;
        }

        .make-text p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 24px;
        }

        .make-text ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .make-text ul li {
          font-size: 16px;
          color: #333;
          padding: 10px 0;
          padding-left: 30px;
          position: relative;
        }

        .make-text ul li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #ff8c42;
          font-size: 18px;
        }

        @media (max-width: 968px) {
          .make-row,
          .make-row.reverse {
            grid-template-columns: 1fr;
            gap: 40px;
            direction: ltr;
          }

          .making-title {
            font-size: 36px;
            margin-bottom: 60px;
          }

          .make-text h3 {
            font-size: 28px;
          }

          .make-img {
            height: 300px;
          }
        }
      `}</style>

      <div className="making-inner">
        <h2 className="making-title">Making it simpler for you</h2>

        {/* BLOCK 1 */}
        <div ref={(el) => rowsRef.current[0] = el} className="make-row">
          <div className="make-img">
            <img src={img1} alt="Research" />
          </div>
          <div className="make-text">
            <h3>Deep Dives, Not Just Data.</h3>
            <p>
              Before we tell your story, we learn it. We dig into your industry, competitors,
              and audience to uncover trends and strategic opportunities.
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
        <div ref={(el) => rowsRef.current[1] = el} className="make-row reverse">
          <div className="make-img">
            <img src={img2} alt="Manage" />
          </div>
          <div className="make-text">
            <h3>We Manage</h3>
            <p>
              We become an extension of your team—handling PR outreach, media relationships,
              timelines, and creative deliverables.
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
        <div ref={(el) => rowsRef.current[2] = el} className="make-row">
          <div className="make-img">
            <img src={img3} alt="Work" />
          </div>
          <div className="make-text">
            <h3>We Work</h3>
            <p>
              Collaboration that feels seamless. We stay aligned with your goals and operate
              like part of your team.
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
        <div ref={(el) => rowsRef.current[3] = el} className="make-row reverse">
          <div className="make-img">
            <img src={img4} alt="Familiar" />
          </div>
          <div className="make-text">
            <h3>We Become Familiar</h3>
            <p>
              We immerse ourselves into your brand so we can speak it fluently—building messaging
              that feels unmistakably you.
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