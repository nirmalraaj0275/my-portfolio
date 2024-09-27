import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p>
            Email:{" "}
            <a href="mailto:nirmalraaj0275@gmail.com">
              nirmalraaj0275@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/nirmal%2Draj%2Dr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              R NIRMAL RAJ
            </a>
          </p>
        </div>
        <div className="contact-item">
          <FaGithub className="icon" />
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/nirmalraaj0275"
              target="_blank"
              rel="noopener noreferrer"
            >
              nirmalraaj0275
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
