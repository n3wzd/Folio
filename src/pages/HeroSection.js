import React from "react";
import ButtonLink from  "../components/common/ButtonLink.js";
import WaveBackground from "../components/background/Wave.js";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero-container">
      <div className="hero-container-item" style={{ zIndex: -1 }}>
        <WaveBackground/>
      </div>
      <div className="hero-container-item">
        <div className="hero-content">
          <h1>Crafting Solutions</h1>
          <p>기술로 세상을 연결하다</p>
          <ButtonLink text="View My Projects" href="#about-section" openNewTab="false"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
