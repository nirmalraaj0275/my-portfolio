import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: yourname@example.com</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </section>
  );
};

export default Contact;
