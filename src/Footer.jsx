import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} PL Mosetlha. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:pmosetlha05@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/precious-mosetlha-4b078636a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
