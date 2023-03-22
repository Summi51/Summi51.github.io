import React from "react";
import CV from "../assests/cv.pdf";
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="nav-link home">
          <div className="slide">
            <span className="one">Hello</span>
            <span className="two">I'm</span>
          </div>
          <h1 id="user-detail-name">Samreen Inayat</h1>
          {/* <h3 id="user-detail-skill">
            Mern <span>Developer.</span>
          </h3> */}
          <h3  id="user-detail-skill">

          <Typewriter 
        options={{
          strings: [
            "A Full Stack Web Developer",
            "An eSports Enthusiast",
            "A Traveller",
            "A MERN Stack Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
          </h3>

          <br />
          <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
              target="_blank"
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
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;