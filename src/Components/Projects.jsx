// My code---------------------------------------------------------

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import cal from "../assests/cal.png";
import dolor from "../assests/dollor.png";
import geek from "../assests/pirate.png";
import vastram from "../assests/vastram.png";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Latest</span>Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={vastram} alt="" />
            <div className="layer">
              <h5 className="project-title">Vastram (Clone Of Belk)</h5>
              <p className="project-description">
                Vastram is an online shopping destination for products.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React.js, Redux, JSON Server, ChakraUI
              </p>
              <div className="project-deployed-link">
                <a href="https://belk-xi.vercel.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/Clone-Of-Belk"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={cal} alt="" />
            <div className="layer">
              <h5 className="project-title">
                Fashionology (Clone Of Anthropology)
              </h5>
              <p className="project-description">
                Fashionology is a new age clothing and apparel store for women.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : MongoDB, Express.js, React.js, Node.js, ChakraUI
              </p>
              <div className="project-deployed-link">
                <a href="https://fashionology.vercel.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/Clone-Of-Anthropology"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={geek} alt="" />
            <div className="layer">
              <h5 className="project-title">
                Violet Beaute (Clone Of Purplle)
              </h5>
              <p className="project-description">
                Violet Beaute is an e-commerce cosmetics retail site.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : JavaScript, HTML, CSS, REST API
              </p>
              <div className="project-deployed-link">
                <a href="https://violetbeaute.netlify.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/Clone-Of-Purplle"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={dolor} alt="" />
            <div className="layer">
              <h5 className="project-title">Code Converter</h5>
              <p className="project-description">
                Code Converter simplifies code and data format conversions.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React.js Node.js, OpenAI, ChakraUI
              </p>

              {/* my code */}

              <div class="project-deployed-link">
                <a
                  href="https://gai201-converter-app.vercel.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>

              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/Code-Converter"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
