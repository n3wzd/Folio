import React from "react";
import Profile from "../components/menu/Profile.js";
import StrengthMenu from "../components/menu/StrengthMenu.js";
import SkillMenu from "../components/menu/SkillMenu.js";
import MeshBackground from "../components/background/Mesh.js";
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
