import React from "react";
import "../styles/ArrowButton.css";

const ArrowButton = ({direction, onClick}) => {
  return (
    <button className="vertical-arrow-button" onClick={onClick}>
        <span className={`arrow-${direction}`}></span>
    </button>
  );
};

export default ArrowButton;
