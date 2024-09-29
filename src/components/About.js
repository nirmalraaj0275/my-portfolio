import React from "react";
import {
  FaLaptopCode,
  FaCamera,
  FaGithub,
  FaDumbbell,
  FaBook,
} from "react-icons/fa";

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
            ,a passionate Frontend Developer with a keen interest in mastering
            backend technologies. My foundation in computer science and web
            development enables me to build dynamic, responsive interfaces while
            continuously expanding my backend knowledge to create full-stack
            solutions. I have worked on a client project where I developed a
            seamless, visually captivating user experience that not only met but
            exceeded the client’s needs. I'm driven by the goal of blending
            intuitive design with technical precision to deliver engaging and
            high-performing web applications.
          </p>
        </div>

        <div className="card">
          <h3>My Journey</h3>
          <p>
            I began my journey by delving into HTML and CSS, swiftly advancing
            to JavaScript and React, where I started crafting dynamic web
            applications. Currently, I am honing my skills as a Frontend
            Developer at NextOne Solution, where I focus on developing
            interactive user interfaces that enhance user engagement and
            experience. This role allows me to combine my passion for design
            with my technical expertise to create seamless, responsive web
            solutions.
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
            <li>
              <FaLaptopCode className="icon" />
              Python
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Interests</h3>
          <ul className="interests-list">
            <li>
              <FaDumbbell className="icon" />
              Gym & Personal Grooming
            </li>
            <li>
              <FaBook className="icon" />
              Educating Myself
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
