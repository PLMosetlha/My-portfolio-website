import React from "react";
import myPhoto from "./assets/myphoto.jpg";
import "./index.css";

const About = () => {
  return (
    <section className="about-section container">
      <div
        className="about-left-bg"
        style={{
          backgroundImage: `url(${myPhoto})`,
        }}
      ></div>
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          Hi! I’m [Your Name], a passionate junior web designer and React
          developer. I love building clean, responsive websites that deliver
          great user experiences.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>React.js & JavaScript</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Design</li>
          <li>Git & GitHub</li>
          <li>UI/UX Basics</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
