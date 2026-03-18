import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <div className="main-text">
        <h2>
          My <span>Experience</span>
        </h2>
        <p style={{color:"white"}}>My Professional Journey</p>
      </div>

      <div className="timeline">

        {/* Evervent */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <span className="timeline-date">July 2025 - Present</span>
            <h3>Software Developer</h3>
            <h4>Evervent | Mohali</h4>
            <p>
              Co-developed Insurance Booker (React, Next.js). Improved booking efficiency by 25% and reduced load time by 35%.
            </p>
            <p className="tech-stack">
              Tech: React, Next.js, Redux, TypeScript, MongoDB, Node.js
            </p>
          </div>
        </div>

        {/* Dezign Shark */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <span className="timeline-date">Feb 2025 - July 2025</span>
            <h3>Full Stack Developer</h3>
            <h4>Dezign Shark | Hyderabad</h4>
            <p>
              Built project listings, SEO improvements & admin dashboards. Boosted traffic by 30%.
            </p>
            <p className="tech-stack">
              Tech: React, Redux, TypeScript, Material UI, Node, MongoDB
            </p>
          </div>
        </div>

        {/* upGrad */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <span className="timeline-date">Dec 2023 - Jan 2025</span>
            <h3>Software Developer</h3>
            <h4>upGrad Education | Hyderabad</h4>
            <p>
              Built Kafka-based Email & WhatsApp automation. Increased engagement by 35%.
            </p>
            <p className="tech-stack">
              Tech: React, Redux, GraphQL, NestJS, MongoDB
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;