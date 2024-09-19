import React from "react";
import Profile from "../components/Profile.js";
import Platformer from "../components/Platformer.js";
import StrengthMenu from "../components/StrengthMenu.js";
import SkillMenu from "../components/SkillMenu.js";
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="left-column">
          <Profile></Profile>
          <SkillMenu></SkillMenu>
        </div>
        <div className="right-column">
          <StrengthMenu></StrengthMenu>
          <Platformer></Platformer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;