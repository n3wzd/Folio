import React from "react";
import "../styles/Treasure.css";

const Treasure = () => {
  return (
    <div className="treasure-chest">
        <div className="side-gold-bar left"></div>
        <div className="side-gold-bar right"></div>
        <div className="horizontal-gold-bar"></div>
        <div className="center-gold-rect"></div>
        <div className="bottom-gold-bar left"></div>
        <div className="bottom-gold-bar right"></div>
    </div>
  );
};

export default Treasure;
