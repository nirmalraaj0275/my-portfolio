import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <div className="left-side">
          <h2>HI THERE!!</h2>
          <h1>I'm NIRMAL RAJ R</h1>
          <p>COMPUTER SCIENCE ENGINEER</p>
          <p className="tagline">
            Aspiring MERN Stack Developer | Building the Foundations of Dynamic
            Web Applications
          </p>
          <a href="#projects" className="cta-button">
            View My Work
          </a>
        </div>

        <div className="right-side">
          <img src="back.png" alt="Nirmal Raj R" />
        </div>

        {/* Sidebar on the right with icons */}
        <div className="sidebar">
          <ul>
            <li>
              <a href="#home">
                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li>
              <a href="#about">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
            <li>
              <a href="#projects">
                <FontAwesomeIcon icon={faProjectDiagram} />
              </a>
            </li>
            <li>
              <a href="#contact">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/nirmal%2Draj%2Dr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nirmalraaj0275"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Home;
