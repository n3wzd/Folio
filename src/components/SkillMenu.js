import React from "react";
import SkillBar from "./SkillBar.js";
import "../styles/Skill.css";

function makeItem(name, gauge) {
  return {name: name, gauge: gauge};
}

const SkillMenu = () => {
  const items = [
    makeItem("Flutter", 0.75),
    makeItem("Dart", 0.75),
    makeItem("Javascript", 0.75),
    makeItem("Node.js", 0.75),
    makeItem("Express", 0.75),
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
        <h3 className="skill-title">Skills</h3>
        {items.map((target, index) => (
          <SkillBar key={index} name={target.name} gauge={target.gauge} />
        ))}
    </div>
  );
};

export default SkillMenu;
