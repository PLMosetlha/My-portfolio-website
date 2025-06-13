import React from "react";
import "./index.css";
import resumePDF from "./assets/Precious-Mosetlha-Resume.pdf"; // make sure your PDF is in /assets

const Resume = () => {
  return (
    <section id="resume" className="resume-section container">
      <h2 className="section-title">My Resume</h2>

      <p>
        You can view or download my full resume below to learn more about my
        skills, education, and projects.
      </p>

      <a
        href={resumePDF}
        download="Precious-Mosetlha-Resume.pdf"
        className="btn-primary"
      >
        Download Resume
      </a>

      <div className="resume-preview">
        <iframe
          src={resumePDF}
          width="100%"
          height="600px"
          title="Resume Preview"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
