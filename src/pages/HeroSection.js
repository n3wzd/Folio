import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Hello, I'm Testman</h1>
        <p>Frontend Developer specialized in React and JavaScript.</p>
        <a href="#about-section" className="btn-primary">
          View My Projects
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
