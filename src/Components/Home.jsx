import React from "react";
import Typewriter from "typewriter-effect";
import C from "../assests/c.pdf";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="nav-link home">
          <div style={{ marginTop: "80px" }} className="slide">
            <br />
            <span
              style={{ marginLeft: "10px", paddingTop: "2px" }}
              className="one"
            >
              Hello
            </span>
            <span
              style={{ marginLeft: "0px", fontSize: "20px", color: "white" }}
              className="two"
            >
              I'm
            </span>
          </div>
          <h2 style={{ color: "white" }} id="user-detail-name">
            Samreen Inayat
          </h2>

          {/* <h3 id="user-detail-skill">
            Mern <span>Developer.</span>
          </h3> */}

          <h3 style={{ color: "white" }} id="user-detail-skill">
            <Typewriter
              options={{
                strings: [
                  "A MERN Stack Web Developer",
                  "Handmade Artistry",
                  "Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                color: " black",
                deleteSpeed: 50,
              }}
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "white",
                fontWeight: 500,
                fontSize: "1.5em",
              }}
            />
          </h3>

          <br />
          <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              style={{ paddingRight: "10px" }}
              href={C}
              download="Samreen-Inayat-Resume"
              id="resume-link-2"
              target="_blank"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1yJqfx_NPoFEN09utO4NEweYJ5TjqGk5U/view?usp=sharing"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
