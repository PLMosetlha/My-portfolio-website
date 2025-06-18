import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} PL Mosetlha. All rights reserved.</p>
      <div className="footer-links">
        
        <a
        href="/Resume.pdf"
        download
        className="footer-resume-link"
      >
        Download Resume
      </a>
      </div>
    </footer>
  );
};

export default Footer;
