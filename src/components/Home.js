import React from "react";

const Home = () => {
  return (
    <section id="home">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="left-side">
          <h1>Hi, I'm Nirmal Raj R</h1>
          <p>Welcome to my portfolio!</p>
          <p className="tagline">
            Frontend Developer | Passionate About Creating Beautiful Websites
          </p>
          <a href="#projects" className="cta-button">
            View My Work
          </a>
        </div>
        <div className="right-side">
          <img src="back.png" alt="Nirmal Raj R" />
        </div>
      </div>
      <div className="social-links">
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourgithub"
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
