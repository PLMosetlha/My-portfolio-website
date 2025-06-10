import React from "react";
import "./index.css";
import movieAppImg from "./assets/movie-app.jpg";
import budgetAppImg from "./assets/budget-app.jpg";

const projects = [
  {
    title: "Movie Database App",
    description: "A React app to search and explore movies using the TMDB API.",
    github: "https://github.com/PLMosetlha/Movie-Database.git",
    live: "https://movie-database-beta-nine.vercel.app/",
    image: movieAppImg,
  },
  {
    title: "Budget Tracker App",
    description:
      "Track your expenses, set savings goals, and get smart financial insights.",
    github: "https://github.com/PLMosetlha/Budget-tracker-app.git",
    live: "https://budget-tracker-app-mu.vercel.app/signin",
    image: budgetAppImg,
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
