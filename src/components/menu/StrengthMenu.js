import React from "react";
import Strength from "./Strength.js";
import "../../styles/Skill.css";

function makeItem(title, text) {
  return {title: title, text: text};
}

const StrengthMenu = () => {
  const items = [
    makeItem("Capability", "다양한 기술 스택을 다루며, 문제를 해결하는 능력을 갖추고 있습니다."),
    makeItem("Perseverance", "어려운 문제도 포기하지 않고 끝까지 해결책을 찾습니다."),
    makeItem("Responsibility", "맡은 모든 부분에 대해 끝까지 책임을 다합니다."),
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {items.map((target, index) => (
          <Strength key={index} title={target.title} text={target.text} />
        ))}
    </div>
  );
};

export default StrengthMenu;
