import React from "react";
import Octahedron from "../components/Octahedron.js";
import "../styles/Strength.css";

const Strength = ({ title, text }) => {
  return (
    <div className="strength">
      <Octahedron/>
      <h3>{ title }</h3>
      <div className="strength-text">{ text }</div>
    </div>
  );
};

export default Strength;
