import { useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import CV from "../assests/cv.pdf";
import DropDown from "./dropDown";
//my
import Typewriter from "typewriter-effect";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [activeNave, setActiveNav] = useState("#");

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <header id="nav-menu">
        <a href="#" className="logo" onClick={() => setActiveNav("#")}>
          {" "}
          {/* Samreen <span> Inayat </span> */}
          <Typewriter
            options={{
              strings: ["Samreen"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </a>
        <ul className="navlist">
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setActiveNav("#home")}
            >
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setActiveNav("#skills")}>
              {" "}
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveNav("#projects")}>
              {" "}
              Projects
            </a>
          </li>
          <li>
            <a href="#githubs" onClick={() => setActiveNav("#githubs")}>
              {" "}
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}>
              {" "}
              Contact
            </a>
          </li>
          <button
            style={{ backgroundColor: "#e75300", borderRadius: "5px" }}
            id="resume-button-1"
          >
            <a
              style={{ backgroundColor: "#e75300", color: "white" }}
              href={CV}
              target="_blank"
              download="Samreen-Inayat-Resume"
              id="resume-link-1"
              className="nav-link resume"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1xToIqX_OF_AIg_c4FZYW943_D9NaLcpI/view?usp=sharing"
                )
              }
            >
              Resume
            </a>

            {/* <Button onClick={toggleColorMode} style={{paddingLeft:'20px'}}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
          </button>
        </ul>
        <div id="menu-icon">
          <DropDown
            options={[
              <a href="#home">Home</a>,
              <a href="#about">About</a>,
              <a href="#skills">Skills</a>,
              <a href="#projects">Projects</a>,
              <a href="#githubs">GitHub</a>,
              <a href="#contact">Contact</a>,
            ]}
            onSelect={handleOptionSelect}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
