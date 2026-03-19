import React from "react";
import me from "../assests/photo.png.jpeg";
// import C from "../assests/c.pdf";

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
          
          {/* <h1 style={{ fontSize: "20px" }}>
            About <span>Me...</span>
          </h1> */}
          {/* <h2>
            <span>About</span> Me...
          </h2> */}
          {/* <h2 id="user-detail-name">
            I'm <span>Samreen Inayat</span> from Uttar Pradesh
          </h2> */}

          <h1 style={{ fontSize: "50px" }}>
            About <span>Me...</span>
          </h1>
        <h2 style={{ fontSize: "40px" }} id="user-detail-name">
            I'm <span>Samreen Inayat</span> from Uttar Pradesh
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
            Versatile developer with expertise in the MERN stack, proficient in crafting dynamic web solutions using MongoDB, Express.js, React, and Node.js. Experienced in both front-end and back-end development, adept at delivering scalable and user-friendly applications. Skilled in optimizing performance and ensuring code quality through rigorous testing and continuous integration methodologies.
            {/* About Me
            An enthusiastic Mern Developer with excellent hands-on experience in developing scalable websites and application using a wide range of front-end and back-end skills like HTML, CSS, JavaScript, React, Redux and Node Js. Highly skilled in design, development and implementation of functional specifications, Ready for taking challenging roles.. */}
          </p>
          {/* <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={C}
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
