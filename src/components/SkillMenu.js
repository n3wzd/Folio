import React from "react";
import SkillBar from "./SkillBar.js";
import "../styles/Skill.css";

function makeItem(name, gauge) {
  return {name: name, gauge: gauge};
}

const SkillMenu = () => {
  const items = [
    makeItem("Flutter", 0.8),
    makeItem("React", 0.6),
    makeItem("CSS", 0.5),
    makeItem("Javascript", 0.5),
    makeItem("Python", 0.5),
  ]

  return (
    <div className="skills-section">
        <h3 className="skill-title">Skills</h3>
        {items.map((target, index) => (
          <SkillBar key={index} name={target.name} gauge={target.gauge} />
        ))}
    </div>
  );
};

export default SkillMenu;
