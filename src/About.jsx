import React from "react";
import myPhoto from "./assets/myphoto.jpg";
import "./index.css";

const About = () => {
  return (
    <section id="about" className="about-section container">
      <div
        className="about-left-bg"
        style={{
          backgroundImage: `url(${myPhoto})`,
        }}
      ></div>
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          I am passionate and driven junior web developer with a solid
          foundation in front-end technologies, gained through a 4 months intensive
          online bootcamp called ALX Africa. I can build responsive and
          user-friendly applications using HTML, CSS, JavaScript, and React, I’m
          eager to bring my creativity and problem-solving skills into a
          professional setting.
        </p>
        <p>
          My background in self-directed learning and project-based development
          has taught me how to adapt quickly, work independently, and
          collaborate effectively. I’m actively seeking an opportunity where I
          can continue growing as a developer, contribute meaningfully to
          real-world projects, and prove myself as a valuable member of a
          development team.
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
