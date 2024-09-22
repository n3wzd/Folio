import React from "react";
import SkillBar from "./SkillBar.js";
import "../styles/Skill.css";

function makeItem(name, gauge) {
  return {name: name, gauge: gauge};
}

const SkillMenu = () => {
  const items = [
    makeItem("Flutter", 0.7),
    makeItem("Dart", 0.7),
    makeItem("Javascript", 0.7),
    makeItem("Node.js", 0.7),
    makeItem("Express", 0.7),
    makeItem("React", 0.6),
    makeItem("HTML", 0.6),
    makeItem("CSS", 0.6),
    makeItem("C++", 0.5),
    makeItem("Python", 0.5),
    makeItem("SQL", 0.5),
    makeItem("MySQL", 0.5),
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
