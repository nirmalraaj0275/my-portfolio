import React from "react";
import { FaLaptopCode, FaHiking, FaCamera, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div id="about-me">
          <h3>Hi! I'm Nirmal Raj R</h3>
          <p>
            Hello! I'm{" "}
            <span style={{ fontWeight: "bold", color: "#f39c12" }}>
              Nirmal Raj R
            </span>
            , a dedicated Frontend Developer with a vibrant passion for design
            and an unwavering commitment to creating exceptional user
            experiences. Armed with a solid background in computer science, I
            possess a deep understanding of web technologies that empowers me to
            transform innovative ideas into dynamic, functional realities. I
            thrive on the challenge of solving complex problems through code and
            take pride in delivering seamless, visually stunning applications
            that not only meet client expectations but exceed them.
          </p>
        </div>

        <div className="card">
          <h3>My Journey</h3>
          <p>
            I started my journey by exploring HTML and CSS, and quickly moved on
            to JavaScript and React, building dynamic web applications. I joined
            NextOne Solution as a Frontend Developer, focusing on creating
            interactive UIs.
          </p>
        </div>

        <div className="card">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>
              <FaLaptopCode className="icon" />
              HTML, CSS, JavaScript
            </li>
            <li>
              <FaLaptopCode className="icon" />
              React, Next.js
            </li>
            <li>
              <FaLaptopCode className="icon" />
              Responsive Web Design
            </li>
            <li>
              <FaGithub className="icon" />
              Version Control (Git)
            </li>
            <li>
              <FaLaptopCode className="icon" />
              UI/UX Principles
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Interests</h3>
          <ul className="interests-list">
            <li>
              <FaHiking className="icon" />
              Hiking & Nature Exploration
            </li>
            <li>
              <FaCamera className="icon" />
              Photography
            </li>
            <li>
              <FaLaptopCode className="icon" />
              Open Source Contributions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
