import React from "react";
import "./Skills.scss";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import chakra from "../../assets/chakra-ui.png.png";
import node from "../../assets/node.png";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";

export default function Skills() {
  const techs = [
    {
      id: 1,
      src: html,
      name: "HTML",
      style: "rgb(255, 102, 0)",
      border: "htmlTech",
    },
    {
      id: 2,
      src: css,
      name: "CSS",
      style: "rgb(51, 154, 250)",
      border: "cssTech",
    },
    {
      id: 7,
      src: chakra,
      name: "Chakra-ui",
      style: "rgb(224, 101, 224)",
      border: "ChakraTech",
    },
    {
      id: 3,
      src: javascript,
      name: "JavaScript",
      style: "rgb(252, 239, 53)",
      border: "jsTech",
    },
    {
      id: 4,
      src: react,
      name: "React",
      style: "rgb(11, 244, 252)",
      border: "reactTech",
    },
    {
      id: 5,
      src: git,
      name: "Git",
      style: "rgb(255, 78, 8)",
      border: "gitTech",
    },
    {
      id: 6,
      src: github,
      name: "GitHub",
      style: "rgb(226, 226, 226)",
      border: "githubTech",
    },

    {
      id: 8,
      src: node,
      name: "NodeJS",
      style: "rgb(87, 194, 60)",
      border: "nodeTech",
    },
    {
      id: 9,
      src: mongodb,
      name: "mongoDB",
      style: "rgb(80, 182, 146)",
      border: "mongoDBTech",
    },
    {
      id: 10,
      src: express,
      name: "ExpressJS",
      style: "rgb(152, 3, 162)",
      border: "expressTech",
    },
  ];

  return (
    <div id="skills" className="Skills">
      <div className="tech-content">
        <div className="tech-title">
          <h1>Skills</h1>
        </div>

        <div className="techs">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className={`skills-card tech rainbow ${tech.border}`}
              style={{ color: `${tech.style}` }}
            >
              <img
                className="skills-card-img"
                src={tech.src}
                alt={tech.name}
                loading="lazy"
              />
              <p className="skills-card-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
