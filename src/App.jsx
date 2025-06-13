// src/App.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import "./index.css";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
