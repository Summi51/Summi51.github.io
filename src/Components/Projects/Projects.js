import React from 'react'
import Title from "../layouts/Title"
import { projectOne, projectTwo, projectThree } from "../../assets/asset";
import ProjectCard from './ProjectCard';
import "./Proj.css"

const Projects = () => {
    return (
        
        <div  id="projects" className='Project'>
            <div className='project-content'>
          <div className="project-headline ">
           <h1>Projects</h1>
          </div>
          
          <div className="project-card-grid">
            <ProjectCard
              title="SOCIAL MEDIA CLONE"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectOne}
              techstack="html,css,javascript"
            />
            <ProjectCard
              title="E-commerce Website"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectTwo}
              techstack="html,css,javascript"
            />
            <ProjectCard
              title="Chatting App"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectThree}
              techstack="html,css,javascript"
            />
            <ProjectCard
              title="SOCIAL MEDIA CLONE"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectThree}
              techstack="html,css,javascript"
            />
            <ProjectCard
              title="E-commerce Website"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectOne}
              techstack="html,css,javascript"
            />
            <ProjectCard
              title="Chatting App"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectTwo}
              techstack="html,css,javascript"
            />
          </div>
          </div>
        </div>
      );
  }
  
  export default Projects
