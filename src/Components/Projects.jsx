import React from "react";
import geek from "../assests/pirate.png";
import dolor from "../assests/dollor.png";
import cal from "../assests/cal.png";
import { SiNetlify } from "react-icons/si";
import gojo from "../assests/gojo.png";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Latest </span>Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={dolor} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
                E-Commerce Product Based retail site
                Login/ Sign-Up | Search Functionality |
                Add-to-Cart. | Sort/ Filter the product
                information | Real-Time Information | Admin
                panel .
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div className="project-deployed-link">
                <a href="https://deluxe-macaron-3eb024.netlify.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/beneficial-spiders-5753"
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
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
                E-Commerce Cosmetics retail site
                Login/ Sign-Up | Search Functionality |
                Add-to-Cart. | Sort/ Filter the product
                information | Real-Time Information | Admin
                panel .
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML , CSS, JS</p>
              <div className="project-deployed-link">
                <a
                  href="https://violetbeaute.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/omprakash8788/-windy-picture-8509"
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
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
                E-Commerce Fashion retail site
                Login/ Sign-Up | Search Functionality |
                Add-to-Cart | Real-Time Information .
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML , CSS, JS-</p>
              <div className="project-deployed-link">
                <a
                  href="https://stirring-cocada-9ed5ac.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/dazzling-wing-7781"
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
            <img src={gojo} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
                IAn enthusiast of a particular topic or field. Geeks are
                “collection” oriented, gathering facts and mementos related to
                their subject of interest. They are obsessed with the newest,
                coolest, trendiest things .
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
              <div class="project-deployed-link">
                <a
                  href="https://genuine-pastelito-cc0593.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/masai-course/samreen_inayat_fw22_0669/blob/master/unit-2/sprint-3/day-2/we/Calculator.html"
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
