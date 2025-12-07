import React, { useEffect, useRef } from "react";

/**
 * Timeline component with scroll-based fade-in and fade-out animation
 */
export default function Timeline({ items }) {
  const rootRef = useRef(null);

  const defaultItems = [
    {
      title: "Our Approach",
      body:
        "We stay deeply connected to our clients' markets and audiences, uncover what makes them stand out, and craft stories that inspire engagement and earn attention across leading communication platforms.",
      highlight: true,
    },
    {
      title: "Our Clients",
      body:
        "We partner with some of the brightest names in the business — shining stars who are shaping industries and transforming markets across India. From fashion to finance, tech to travel, our clients lead with purpose and passion, and we make sure their stories reach the spotlight they deserve.",
      highlight: true,
    },
    {
      title: "Our Job",
      body:
        "We bring our clients' stories to life — sparking conversations, building influence, and unlocking new opportunities across markets and media. Every story we tell opens doors to new audiences, new partnerships, and new avenues for growth.",
      highlight: false,
    },
    // {
    //   title: "Our Impact",
    //   body:
    //     "Through strategic storytelling and authentic engagement, we help brands build lasting relationships with their audiences. Our work doesn't just generate buzz—it creates meaningful connections that drive real business results.",
    //   highlight: false,
    // },
    // {
    //   title: "Our Promise",
    //   body:
    //     "We're committed to excellence in every campaign, every story, and every interaction. When you partner with us, you're not just getting a service provider—you're gaining a dedicated ally in your success.",
    //   highlight: true,
    // },
  ];

  const data = Array.isArray(items) && items.length ? items : defaultItems;

  /* ------------------------------------------------------------------
     SCROLL ANIMATION: Fade in when visible, fade out when leaving.
  ------------------------------------------------------------------ */
  useEffect(() => {
    const blocks = rootRef.current?.querySelectorAll(".eael-content-timeline-block");
    if (!blocks) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const block = entry.target;
          const content = block.querySelector(".eael-content-timeline-content");
          const marker = block.querySelector(".eael-content-timeline-img");
          const inner = block.querySelector(".eael-content-timeline-inner");

          if (entry.isIntersecting) {
            // Fade-in sequence
            setTimeout(() => marker?.classList.add("visible"), 100);
            setTimeout(() => inner?.classList.add("visible"), 200);
            setTimeout(() => content?.classList.add("visible"), 300);
          } else {
            // Fade-out sequence
            content?.classList.remove("visible");
            marker?.classList.remove("visible");
            inner?.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="timeline-root">
      <style>{timelineCSS}</style>

      <h3 className="timeline-eyebrow">WHO ARE WE</h3>

      <p className="timeline-intro">
        We are not just a PR marketing firm but we're your story's biggest ally.
        We mix digital strategy, content design, and reputation–first thinking to
        make your voice impossible to ignore.
      </p>

      <h2 className="timeline-heading">Digital Communication Services</h2>

      <div className="eael-content-timeline-container" ref={rootRef}>
        {data.map((it, i) => (
          <div
            key={i}
            className={`eael-content-timeline-block ${
              it.highlight ? "eael-highlight" : ""
            }`}
          >
            {/* Grey vertical line */}
            <div className="eael-content-timeline-line">
              <div
                className={`eael-content-timeline-inner ${
                  it.highlight ? "eael-highlighted" : "eael-muted"
                }`}
              />
            </div>

            {/* Marker Circle (NO pencil icon now) */}
            <div className="eael-content-timeline-img eael-picture" aria-hidden="true"></div>

            {/* Content box */}
            <div className="eael-content-timeline-content">
              <h3 className="eael-timeline-title">{it.title}</h3>
              <p>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   INLINE CSS — Clean, Premium, Smooth Animations
------------------------------------------------------------------ */
const timelineCSS = `
* { margin: 0; padding: 0; box-sizing: border-box; }

/* Main container */
.timeline-root {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 200px;
  font-family: "Inter", sans-serif;
}

.timeline-eyebrow {
  display: inline-block;
  background: #fdf1e7;   /* FORCE white background */
  padding: 6px 14px;
  border-radius: 20px;
  color: #ff6b35 !important;        /* force text color too */
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  width: fit-content;
}



/* intro paragraph */
.timeline-intro {
  color: #666;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 800px;
}

/* heading */
.timeline-heading {
  font-size: 42px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 80px;
}

/* main timeline wrapper */
.eael-content-timeline-container {
  position: relative;
}

/* each block */
.eael-content-timeline-block {
  position: relative;
  margin-bottom: 100px;
  display: flex;
  align-items: flex-start;
}

/* Vertical grey line */
.eael-content-timeline-line {
  position: absolute;
  left: 30px;
  width: 4px;
  top: 0;
  height: 100%;
  background: #e0e0e0;
  z-index: 1;
}

.eael-content-timeline-inner {
  width: 100%;
  height: 0;
  background: #ff6b35;
  transition: height 1s ease-out;
}

.eael-content-timeline-inner.visible {
  height: 100%;
}

/* Marker circle (empty) */
.eael-content-timeline-img {
  position: relative;
  z-index: 2;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  border: 4px solid #ff6b35;
  flex-shrink: 0;

  opacity: 0;
  transform: scale(0.3);
  transition: all 0.6s cubic-bezier(.34,1.56,.64,1);
}

.eael-content-timeline-img.visible {
  opacity: 1;
  transform: scale(1);
}

/* Content box */
.eael-content-timeline-content {
  flex: 1;
  margin-left: 40px;
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #f0f0f0;

  opacity: 0;
  transform: translateY(60px);
  filter: blur(6px);
  transition: all 0.8s cubic-bezier(.25,.46,.45,.94);
}

.eael-content-timeline-content.visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.eael-highlight .eael-content-timeline-content {
  border-left: 4px solid #ff6b35;
}

.eael-timeline-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1a1a1a;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-heading { font-size: 32px; }
  .eael-content-timeline-content { margin-left: 20px; padding: 24px; }
  .eael-content-timeline-img { width: 50px; height: 50px; }
}
`;
