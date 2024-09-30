import React from "react";
import Profile from "../components/Profile.js";
import StrengthMenu from "../components/StrengthMenu.js";
import SkillMenu from "../components/SkillMenu.js";
import MeshBackground from "../components/MeshBackground.js";
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="left-column">
          <Profile/>
          <SkillMenu/>
        </div>
        <div className="right-column">
          <StrengthMenu/>
          <div style={{ marginTop: "30px", height: "60%" }}>
            <MeshBackground/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;