import React from "react";
import "./index.css";
import myPhoto from "./assets/myphoto.jpeg";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-left">
        <img src={myPhoto} alt="My portrait" className="profile-image" />
      </div>

      <div className="home-right">
        <div className="home-content">
          <h1>Hello, I'm Precious Mosetlha</h1>
          <p>Junior Web Designer</p>
          <a href="#projects" className="btn-primary">
            View my projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
