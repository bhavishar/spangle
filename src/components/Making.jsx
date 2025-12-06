import React from "react";
import "../styles/making.css";

export default function Making(){
  return (
    <section id="making" className="making" data-aos="fade-up">
      <div className="making-inner">
        <h2>Making it simpler for you</h2>

        <div className="row">
          <div className="col text" data-aos="fade-right">
            <h3>We Research</h3>
            <p>Deep dives, not just data. We shape strategy from the ground up.</p>
          </div>
          <div className="col image" data-aos="fade-left">
            <div className="imgbox" />
          </div>
        </div>

        <div className="row reverse">
          <div className="col image" data-aos="fade-right">
            <div className="imgbox" />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3>We Manage</h3>
            <p>From strategy to screens — we execute and optimize.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
