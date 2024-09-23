// src/components/Projects.js
import React from "react";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "An online store built using React and Node.js with a custom dashboard for analytics.",
    link: "https://yourprojectlink.com",
    github: "https://github.com/yourgithub/ecommerce",
  },
  {
    title: "Yoga Center Website",
    description:
      "A user-friendly website built using EJS, Node.js, and Express.js for a yoga center.",
    link: "https://yourprojectlink.com",
    github: "https://github.com/yourgithub/yoga-center",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo"
              >
                Live Demo
              </a>{" "}
              |
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                {" "}
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
