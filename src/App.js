// src/App.js
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import "./stylings/About.css";
import "./stylings/Contact.css";
import "./stylings/Home.css";
import "./stylings/Project.css";
import "./stylings/Certifi.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default App;
