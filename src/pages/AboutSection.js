import React from "react";
import Profile from "../components/Profile.js";
import Platformer from "../components/Platformer.js";
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        <div className="left-column">
          <div className="profile-section">
            <div className="profile-pic">
              <Profile></Profile>
            </div>
            <div className="profile-details">
              <div className="profile-name">Jane Doe</div>
              <div className="profile-bio">
                Hi! I'm Jane, a full-stack developer with a passion for creating interactive applications and websites. I love learning new technologies and applying them to solve real-world problems.
              </div>
            </div>
          </div>
          <div className="skills-section">
            <h3 className="skill-title">Skills</h3>
            <div className="skill">
              <div className="skill-name">React</div>
              <div className="skill-bar">
                <div className="skill-bar-fill"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Javascript</div>
              <div className="skill-bar">
                <div className="skill-bar-fill"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">CSS</div>
              <div className="skill-bar">
                <div className="skill-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <Platformer></Platformer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;