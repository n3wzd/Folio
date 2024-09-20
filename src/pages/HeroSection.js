import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Hello, I'm Testman</h1>
        <p>기술로 세상을 연결하는 개발자로서, 혁신과 문제 해결을 통해 가치를 창출하며 속도와 역량으로 목표를 향해 나아갑니다.</p>
        <a href="#about-section" className="btn-primary">
          View My Projects
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
