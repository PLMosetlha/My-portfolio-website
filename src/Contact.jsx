import React from "react";
import "./index.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-details">
        <p>
          <FaEnvelope className="icon" />
          <a href="mailto:pmosetlha05@gmail.com">pmosetlha05@gmail.com</a>
        </p>
        <p>
          <FaPhoneAlt className="icon" />
          +27761522218
        </p>
        <p>
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/precious-mosetlha-4b078636a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/precious-mosetlha-4b078636a
          </a>
        </p>
        <p>
          <FaGithub className="icon" />
          <a
            href="https://github.com/PLMosetlha"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/PLMosetlha
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
