import React from "react";
<<<<<<< HEAD
import {
  SiMongodb,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
  // SiBootstrap,
  SiPostman,
  SiJenkins,
  SiVercel,
  SiNetlify,
  SiBitbucket,
  SiJira,
  SiClickup,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub, FaJava } from "react-icons/fa";
import { TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";

const Skills = () => {
  return (
    <section id="skills">
      <div className="main-text">
        <h2>
          My <span>Skills</span>
        </h2>
        <p style={{color:'white'}}>Technologies & Tools I Work With</p>
      </div>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skills-box">
          <h3>Frontend</h3>
          <div className="skills-grid">
            <Skill icon={<AiOutlineHtml5 />} name="HTML" />
            <Skill icon={<TbBrandCss3 />} name="CSS" />
            <Skill icon={<TbBrandJavascript />} name="JavaScript" />
            <Skill icon={<FaReact />} name="React.js" />
            <Skill icon={<SiRedux />} name="Redux" />
            <Skill icon={<SiTypescript />} name="TypeScript" />
            <Skill icon={<SiNextdotjs />} name="Next.js" />
            {/* <Skill icon={<SiBootstrap />} name="Bootstrap" /> */}
            <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
          </div>
        </div>

        {/* Backend */}
        <div className="skills-box">
          <h3>Backend</h3>
          <div className="skills-grid">
            <Skill icon={<FaNodeJs />} name="Node.js" />
            <Skill icon={<SiNestjs />} name="NestJS" />
            <Skill icon={<SiExpress />} name="Express.js" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiGraphql />} name="REST APIs" />
            <Skill icon={<FaJava />} name="Java" />
          </div>
        </div>

        {/* Tools */}
        <div className="skills-box">
          <h3>Tools & Platforms</h3>
          <div className="skills-grid">
            <Skill icon={<FaGithub />} name="GitHub" />
            <Skill icon={<SiPostman />} name="Postman" />
            <Skill icon={<SiBitbucket />} name="BitBucket" />
            <Skill icon={<SiNetlify />} name="Netlify" />
            <Skill icon={<SiVercel />} name="Vercel" />
            <Skill icon={<SiJira />} name="JIRA" />
            <Skill icon={<SiJenkins />} name="Jenkins" />
            <Skill icon={<SiClickup />} name="ClickUp" />
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-box">
          <h3>Soft Skills</h3>
          <div className="soft-skills">
            <span>Management</span>
            <span>Problem Solving</span>
            <span>Communication</span>
            <span>Teamwork</span>
            <span>DSA</span>
          </div>
        </div>

      </div>
    </section>
  );
};

const Skill = ({ icon, name }) => (
  <div className="skill-card">
    <div className="skill-icon">{icon}</div>
    <p>{name}</p>
  </div>
);

export default Skills;
=======
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
>>>>>>> 4400d55243f575304088327c38133fc7b8007106
