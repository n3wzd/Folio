import React from "react";
import ButtonLink from  "../components/ButtonLink.js";
import WaveBackground from "../components/WaveBackground.js";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero-container">
      <div className="hero-container-item" style={{ zIndex: -1 }}>
        <WaveBackground/>
      </div>
      <div className="hero-container-item">
        <div className="hero-content">
          <h1>Crafting Solutions, One Project at a Time</h1>
          <p>기술로 세상을 연결하는 개발자로서, 혁신과 문제 해결을 통해 가치를 창출하며 속도와 역량으로 목표를 향해 나아갑니다.</p>
          <ButtonLink text="View My Projects" href="#about-section" openNewTab="false"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
