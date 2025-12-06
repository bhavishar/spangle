import React, { useEffect, useRef } from "react";

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);
    
    if (!section) return;

    const sectionObserver = new IntersectionObserver(
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
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    const cardObserver = new IntersectionObserver(
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
        rootMargin: "-30px 0px -30px 0px"
      }
    );

    sectionObserver.observe(section);
    cards.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section id="services" className="services">
      <style>{`
        .services {
          background: #e9f3f0;
          padding: 80px 20px;
        }

        .services-inner {
          max-width: 1100px;
          margin: auto;
          text-align: center;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .services-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .services-tag {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          background: #fff;
          color: #6f9b8f;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .services-inner h2 {
          font-size: 42px;
          font-weight: 800;
          color: #053f34;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin-top: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .service-card {
          background: #053f34;
          color: white;
          padding: 32px 22px;
          border-radius: 12px;
          min-height: 200px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: left;
          position: relative;
          
          /* Flip In Animation */
          opacity: 0;
          transform: perspective(1000px) rotateY(90deg);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .service-card.visible {
          opacity: 1;
          transform: perspective(1000px) rotateY(0deg);
        }

        .service-card:nth-child(1) {
          transition-delay: 0.1s;
        }

        .service-card:nth-child(2) {
          transition-delay: 0.2s;
        }

        .service-card:nth-child(3) {
          transition-delay: 0.3s;
        }

        .service-card:hover {
          transform: perspective(1000px) rotateY(0deg) translateY(-8px);
          box-shadow: 0 20px 40px rgba(5, 63, 52, 0.3);
        }

        .service-card .icon {
          font-size: 42px;
          margin-bottom: 16px;
          display: inline-block;
        }

        .service-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #fff;
        }

        .service-card p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .services-inner h2 {
            font-size: 32px;
          }

          .service-card {
            min-height: 170px;
          }
        }
      `}</style>

      <div ref={sectionRef} className="services-inner">
        <p className="services-tag">OUR SERVICES</p>
        <h2>From Chaos to Clarity, We Make Communication Simple</h2>

        <div className="services-grid">
          <div ref={(el) => cardsRef.current[0] = el} className="service-card">
            <div className="icon">📣</div>
            <h3>Digital Marketing</h3>
            <p>Marketing strategy and campaigns that help you grow.</p>
          </div>
          <div ref={(el) => cardsRef.current[1] = el} className="service-card">
            <div className="icon">📊</div>
            <h3>Research & Analysis</h3>
            <p>Data-driven insights to shape your communications.</p>
          </div>
          <div ref={(el) => cardsRef.current[2] = el} className="service-card">
            <div className="icon">🤝</div>
            <h3>Public Relations</h3>
            <p>Reputation and media strategy to amplify your voice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}