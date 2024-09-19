import React from "react";
import Strength from "./Strength.js";
import "../styles/Skill.css";

function makeItem(title, text) {
  return {title: title, text: text};
}

const StrengthMenu = () => {
  const items = [
    makeItem("Fast", "Gotta Go Fast!"),
    makeItem("Active", "Active Button"),
    makeItem("Power", "I Got the Power!"),
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
