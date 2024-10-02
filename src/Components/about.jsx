import React from "react";
import me from "../assests/photo.png.jpeg";
// import CV from "../assests/cv.pdf";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about-img">
          <img
            className="home-img"
            src={me}
            style={{ width: "100%" }}
            alt="home-image"
          />
        </div>
        <div className="nav-link about">
          <h1 style={{ fontSize: "18px" }}>
            About <span>Me...</span>
          </h1>
          <h2 id="user-detail-name">
            I'm <span>Samreen Inayat</span> from Pratapgarh, Uttar Pradesh
          </h2>
          {/* <h4>Mern Developer</h4> */}
          <br />
          <br />
          <p
            id="user-detail-intro"
            style={{ letterSpacing: "1px", textAlign: "justify" }}
          >
            {/* An aspiring Full Stack Web Developer with a strong command of HTML, CSS, and JavaScript, proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js). A constant learner with the ability to adapt to new technologies, capable of providing valuable support while working in teams. */}
            {/* An aspiring Full Stack Web Developer with expertise in HTML, CSS, and JavaScript, proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), along with NestJS and GraphQL. A quick learner, adaptable to new technologies, and skilled in collaborative team environments. */}
            Full Stack Developer with 9 months of experience in building
            scalable websites and APIs using NestJS, GraphQL, MongoDB,
            Express.js, React.js, Node.js, HTML, CSS, and JavaScript. A detail
            oriented problem solver and collaborative team player, eager to
            learn and deliver user-friendly solutions.
            {/* About Me
            An enthusiastic Mern Developer with excellent hands-on experience in developing scalable websites and application using a wide range of front-end and back-end skills like HTML, CSS, JavaScript, React, Redux and Node Js. Highly skilled in design, development and implementation of functional specifications, Ready for taking challenging roles.. */}
          </p>
          {/* <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1xToIqX_OF_AIg_c4FZYW943_D9NaLcpI/view?usp=sharing"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button> */}
        </div>
      </section>
    </>
  );
};

export default About;
