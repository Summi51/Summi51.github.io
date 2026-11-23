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

        {/* Mercor */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <span className="timeline-date">Mar 2026 - Present</span>
            <h3>Freelance Software Engineer</h3>
            <h4>Mercor | Remote</h4>
            <p>
              Delivering remote contract engineering and AI-focused project work using TypeScript, React and Node.js.
            </p>
            <p className="tech-stack">
              Tech: TypeScript, React, Node.js, Generative AI
            </p>
          </div>
        </div>

        {/* Evervent */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <span className="timeline-date">Jul 2025 - Mar 2026</span>
            <h3>Software Developer</h3>
            <h4>Evervent | Mohali (Hybrid)</h4>
            <p>
              Co-built the Insurance Booker web app with reusable UI components, reduced API response time by 40% and shipped 5 production features.
            </p>
            <p className="tech-stack">
              Tech: React, Next.js, Redux, TypeScript, MongoDB, Node.js
            </p>
          </div>
        </div>

        {/* Dezign Shark */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <span className="timeline-date">Feb 2025 - Jul 2025</span>
            <h3>Full Stack Developer</h3>
            <h4>Dezign Shark | Contract, Remote</h4>
            <p>
              Built project listings with filtering, pricing and WhatsApp contact flows; improved SEO with SSR and built a real-time analytics dashboard, raising traffic tracking accuracy by 35%.
            </p>
            <p className="tech-stack">
              Tech: React, Redux, TypeScript, Material UI, Node, MongoDB
            </p>
          </div>
        </div>

        {/* upGrad */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <span className="timeline-date">Dec 2023 - Sep 2024</span>
            <h3>Software Developer</h3>
            <h4>upGrad Education Pvt. Ltd. | Hyderabad</h4>
            <p>
              Built Kafka-based Email & WhatsApp notification workflows and refactored the CMS, improving UX by 20% and reducing bugs by 20%.
            </p>
            <p className="tech-stack">
              Tech: React, GraphQL, NestJS, MongoDB, Apache Kafka
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;