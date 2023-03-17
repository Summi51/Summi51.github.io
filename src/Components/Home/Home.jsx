import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import Himage from "../../assets/Himage.png";
import developer from "../../assets/developer.gif";
import computercode from "../../assets/computer-code.gif";
import "./Home.scss";
import Typing from "react-typing-effect";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div id="home" className="Home">
      <div className="container-home">
        <div className="content">
          <h2>Hey! I Am</h2>
          <h1 id="user-detail-name">Samreen Inayat</h1>
          <div className="typewriter">
            <Typewriter
              //   style={{ color: "red", fontSize: "24px", fontFamily: "Arial" }}
              options={{
                strings: [
                  "Greetings, and welcome to my portfolio!",
                  "As a full-stack developer, I bring ideas to life with code.",
                  "Crafting web solutions that inspire and engage.",
                  "Turning ideas into functional web solutions.",
                  "Focusing on performance and user experience.",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 100,
                deleteSpeed: 80,
              }}
            />
          </div>
          <p id="user-detail-intro">
            {/* a MERN stack developer who loves to build things. I believe that the
            best code is code that is both functional and elegant, and I strive
            to achieve this in all of my projects. Whether it's building a
            responsive user interface, designing a custom API, or optimizing
            database performance, I approach every task with enthusiasm and
            attention to detail. Let's create something remarkable together */}
            Full Stack Developer with expertise in front-end and back-end
            development, committed to producing clean and efficient code to
            enhance user experience.
          </p>
          {/* <Link
            smooth
            duration={500}
            to="https://drive.google.com/file/d/15JIlHxD1rWb0d0OvkdKWurCJRhsWxXcp/view?usp=sharing"
            target="_blank"
            download
            className="link"
          >
            Resume
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </Link> */}
          <a
            id="resume-link-2"
            href="https://drive.google.com/file/d/1xToIqX_OF_AIg_c4FZYW943_D9NaLcpI/view?usp=sharing"
            target="_blank"
            className="link"
            download
          >
            Resume
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </a>
        </div>

        <div className="heroImage">
          <img class="home-img" src={developer} alt="" />
        </div>
      </div>
    </div>
  );
}
