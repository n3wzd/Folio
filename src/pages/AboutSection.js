import React from "react";
import Profile from "../components/Profile.js";
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
            <h3>Technical Skills</h3>
            <div className="skill">
              <span>React</span>
              <div className="skill-bar">
                <div className="skill-level react"></div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="skill-bar">
                <div className="skill-level javascript"></div>
              </div>
            </div>
            <div className="skill">
              <span>CSS</span>
              <div className="skill-bar">
                <div className="skill-level css"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="strengths">
            <div className="strength">
              <h4>Creative</h4>
              <p>Bringing innovative ideas into reality with modern design principles.</p>
            </div>
            <div className="strength">
              <h4>Problem Solver</h4>
              <p>Passionate about solving challenging problems with effective solutions.</p>
            </div>
            <div className="strength">
              <h4>Team Player</h4>
              <p>Enjoy working with diverse teams to achieve shared goals.</p>
            </div>
            <div className="strength">
              <h4>Adaptable</h4>
              <p>Quick to learn and adapt to new environments and technologies.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="animated-background">
        <div className="animated-structure"></div>
      </div>
    </section>
  );
};

export default AboutSection;