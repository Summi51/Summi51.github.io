import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import "./project.css"

const ProjectCard = ({ title, des, src,techstack }) => {
    return (
        <div className="custom-card project-card">
          <div className="card-image-container">
            <img
              className="card-image"
              src={src}
              alt="src"
            />
          </div>
          <div className="card-details-container">
            <div className="card-details">
              <div className="card-title-container">
                <h3 className="card-title project-title">
                  {title}
                </h3>
                 <h4 className="project-tech-stack">{techstack}</h4>
                <div className="card-icons">
                  <span className="card-icon">
                    <BsGithub />
                  </span>
                  <span  className="card-icon">
                    <FaGlobe />
                  </span>
                </div>
              </div>
              <p className="card-description project-description">
                {des}
              </p>
            </div>
          </div>
        </div>
      );
    };


export default ProjectCard