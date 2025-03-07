import React from "react";
import SkillBar from "./SkillBar.js";
import "../../styles/Skill.css";

function makeItem(name, gauge) {
  return {name: name, gauge: gauge};
}

const SkillMenu = () => {
  const items = [
    makeItem("TypeScript", 0.8),
    makeItem("Node.js", 0.8),
    makeItem("React", 0.8),
    makeItem("Spring Boot", 0.8),
    makeItem("Flutter", 0.7),
    makeItem("C++", 0.7),
    makeItem("Python", 0.6),
    makeItem("Java", 0.6),
    makeItem("MySQL", 0.6),
  ]

  return (
    <div className="skills-section">
        <h2 className="skill-title">Skills</h2>
        {items.map((target, index) => (
          <SkillBar key={index} name={target.name} gauge={target.gauge} />
        ))}
    </div>
  );
};

export default SkillMenu;
