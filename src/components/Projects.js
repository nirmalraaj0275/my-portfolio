import React from "react";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "An online store developed using React and Node.js, featuring a custom-built analytics dashboard for tracking performance and user activity in real-time.",
    link: "https://yourprojectlink.com",
    github: "https://github.com/yourgithub/ecommerce",
  },
  {
    title: "Yoga Center Website",
    description:
      "A user-friendly and responsive website developed for a yoga center using EJS, Node.js, and Express.js. It features dynamic content, seamless navigation, and an intuitive design, allowing users to easily explore class schedules and center information.",
    link: "https://www.amizhbirthandyoga.com/",
    github: "https://github.com/yourgithub/yoga-center",
  },
  {
    title: "AJIO Figma Design",
    description:
      "A visually appealing e-commerce website recreated in Figma, mirroring Ajio's user interface with a focus on intuitive navigation, modern design, and seamless user experienc",
    link: "https://www.figma.com/design/l2PI6j1cTyuAQlHluTNLhe/new-one?node-id=0-1&node-type=canvas&t=M3ljqfzHoWvnuL79-0",
    github: "https://github.com/yourgithub/yoga-center",
  },
  // Add more projects as needed
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
                Live
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
