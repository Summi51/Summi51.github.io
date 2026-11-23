// My code---------------------------------------------------------

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import cal from "../assests/cal.png";
import dolor from "../assests/dollor.png";
import geek from "../assests/pirate.png";
import vastram from "../assests/vastram.png";
import vydrivo from "../assests/vydrivo.jpg";
import ragQa from "../assests/rag_qa.jpg";
import qyron from "../assests/qyron.jpg";
import makeMyMarriage from "../assests/make_my_marriage.jpg";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Latest</span> Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={vydrivo} alt="Vydrivo - AI Storyboard-to-Video SaaS" />
            <div className="layer">
              <h5 className="project-title">
                Vydrivo - AI Storyboard-to-Video SaaS
              </h5>
              <p className="project-description">
                Turns one idea into a reviewable storyboard, then a 60-90 second
                vertical MP4 with Hindi voice-over and Hinglish captions.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : AWS Amplify, Cloudflare R2, Supabase (PostgreSQL), React, Node.js
              </p>
              <div className="project-deployed-link">
                <a href="https://dev.d35b51hio740im.amplifyapp.com/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/Vydrivo"
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
            <img
              src={makeMyMarriage}
              alt="Make My Marriage - Wedding Planning Platform"
            />
            <div className="layer">
              <h5 className="project-title">
                Make My Marriage - Wedding Planning Platform
              </h5>
              <p className="project-description">
                Next.js modular monolith with session auth, role-based access,
                planning tools, guest RSVPs, email reminders and photo gallery.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : Next.js, TypeScript, MongoDB, Tailwind, Zod
              </p>
              <div className="project-deployed-link">
                <a href="https://dev.debru5zwxk5qm.amplifyapp.com/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/make-my-marriage"
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
            <img src={ragQa} alt="RAG Document Q&A" />
            <div className="layer">
              <h5 className="project-title">RAG Document Q&amp;A</h5>
              <p className="project-description">
                Answers questions from an uploaded PDF with page-referenced
                sources using Gemini embeddings and top-5 vector retrieval.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React, Node.js, MongoDB Atlas Vector Search, Gemini
              </p>
              <div className="project-deployed-link">
                <a href="https://rag-document-qa-ff68.vercel.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/rag-document-qa"
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
            <img src={qyron} alt="Qyron AI - Multimodal Chatbot" />
            <div className="layer">
              <h5 className="project-title">Qyron AI - Multimodal Chatbot</h5>
              <p className="project-description">
                Handles image, PDF, text, CSV and JSON inputs with model
                fallback, JWT auth, saved chat history and public share links.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React, Node.js, MongoDB, Gemini API
              </p>
              <div className="project-deployed-link">
                <a href="https://chatbot-llm-7nzn.vercel.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/chatbot-LLM"
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
                Fashionology (Clone Of Ajio)
              </h5>
              <p className="project-description">
                Fashionology: Trendy fashion curated for style and comfort.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : MongoDB, Express.js, React.js, Node.js, Material UI
              </p>
              <div className="project-deployed-link">
                <a href="https://frontend-one-tau-euwzts257k.vercel.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/Clone-Of-Ajio"
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
            <img src={dolor} alt="" />
            <div className="layer">
              <h5 className="project-title">Hrms Lite</h5>
              <p className="project-description">
                Full-stack HRMS app with role-based access and attendance tracking.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React.js, Vite, Node.js, MongoDB, Material UI
              </p>
              <div class="project-deployed-link">
                <a
                  href="https://hrms-lite-frontend-seven-dusky.vercel.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>

              <div className="project-github-link">
                <a
                  href="https://github.com/Summi51/hrms-lite"
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

          {/* <div className="project-card">
            <img src={dolor} alt="" />
            <div className="layer">
              <h5 className="project-title">Code Converter</h5>
              <p className="project-description">
                Code Converter simplifies code and data format conversions.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : React.js Node.js, OpenAI, ChakraUI
              </p>
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
          </div> */}



        </div>
      </section>
    </>
  );
};

export default Projects;
