import React from "react";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hi! I’m Nirmal Raj R, a passionate Frontend Developer with a keen eye
          for design and a love for crafting seamless user experiences. With a
          background in computer science and a strong foundation in web
          technologies, I thrive on turning ideas into reality through code.
        </p>
        <h3>My Journey</h3>
        <p>
          From a young age, I was fascinated by technology and how it shapes our
          world. I started my journey by exploring HTML and CSS, and quickly
          moved on to more complex frameworks and libraries. Over the years,
          I've worked on various projects that have helped me grow as a
          developer and hone my skills.
        </p>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>HTML, CSS, JavaScript</li>
          <li>React, Next.js</li>
          <li>Responsive Web Design</li>
          <li>Version Control (Git)</li>
          <li>UI/UX Principles</li>
        </ul>
        <h3>Interests</h3>
        <p>
          Outside of coding, I enjoy exploring new technologies, contributing to
          open-source projects, and keeping up with the latest trends in web
          development. I also love hiking, photography, and sharing my knowledge
          with others through workshops and mentorship.
        </p>
      </div>
    </section>
  );
};

export default About;
