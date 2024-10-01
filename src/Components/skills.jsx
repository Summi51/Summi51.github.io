import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="main-text">
          <h2>
            <span>My </span>Skills
          </h2>
          <p style={{ marginTop: "10px" }}>What I am Expert In ?</p>
        </div>
        <div className="nav-link skills" id="skills-part">
          <div className="skills-card">
            <div className="skills-card-img">
              <SiMongodb
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              MongoDB
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <SiExpress
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              Express.js
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <FaReact
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              React.js
            </h3>
          </div>

          {/* here */}
          <div className="skills-card">
            <div className="skills-card-img">
              <DiNodejs
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              Node JS
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <TbBrandJavascript
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              JavaScript
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img" style={{ textAlign: "center" }}>
              <SiRedux
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              Redux
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img" style={{ textAlign: "center" }}>
              <SiNestjs
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              NestJS
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img" style={{ textAlign: "center" }}>
              <SiGraphql
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              GraphQL
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <SiTypescript
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              TypeScript
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <AiOutlineHtml5
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              HTML
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <TbBrandCss3
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              CSS
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <TfiWrite
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#EC5700" }}>
              DSA
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
