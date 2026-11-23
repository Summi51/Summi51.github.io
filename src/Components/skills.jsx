import React from "react";
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
  SiPostgresql,
  SiSupabase,
  SiAmazonaws,
  SiApachekafka,
  SiJsonwebtokens,
  SiPlaywright,
  SiVitest,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub, FaJava } from "react-icons/fa";
import { TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { AiOutlineHtml5, AiOutlineRobot } from "react-icons/ai";
import {
  FaBrain,
  FaLaptopCode,
  FaSitemap,
  FaPuzzlePiece,
  FaComments,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";


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
            <Skill icon={<SiGraphql />} name="GraphQL" />
            <Skill icon={<SiApachekafka />} name="Apache Kafka" />
            <Skill icon={<SiJsonwebtokens />} name="JWT Auth" />
            <Skill icon={<FaJava />} name="Java" />
          </div>
        </div>

        {/* AI & Data */}
        <div className="skills-box">
          <h3>AI & Data</h3>
          <div className="skills-grid">
            <Skill icon={<SiPostgresql />} name="PostgreSQL" />
            <Skill icon={<SiSupabase />} name="Supabase" />
            <Skill icon={<AiOutlineRobot />} name="Gemini API" />
            <Skill icon={<AiOutlineRobot />} name="RAG / LLM Apps" />
            <Skill icon={<AiOutlineRobot />} name="Prompt Engineering" />
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
            <Skill icon={<SiAmazonaws />} name="AWS Amplify" />
            <Skill icon={<SiPlaywright />} name="Playwright" />
            <Skill icon={<SiVitest />} name="Vitest" />
            <Skill icon={<SiJira />} name="JIRA" />
            <Skill icon={<SiJenkins />} name="Jenkins" />
            <Skill icon={<SiClickup />} name="ClickUp" />
          </div>
        </div>

        {/* Role Expertise */}
        <div className="skills-box">
          <h3>Role Expertise</h3>
          <div className="skills-grid">
            <Skill icon={<FaBrain />} name="AI Engineer" />
            <Skill icon={<FaLaptopCode />} name="Full Stack Developer" />
            <Skill icon={<SiMongodb />} name="MERN Stack Developer" />
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-box">
          <h3>Soft Skills</h3>
          <div className="skills-grid">
            <Skill icon={<FaUserTie />} name="Management" />
            <Skill icon={<FaPuzzlePiece />} name="Problem Solving" />
            <Skill icon={<FaComments />} name="Communication" />
            <Skill icon={<FaUsers />} name="Teamwork" />
            <Skill icon={<FaSitemap />} name="DSA" />
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