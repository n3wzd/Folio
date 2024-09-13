import React from "react";
import "../styles/Platformer.css";

const TILE_SIZE = 100;

const Tile = ({x, y, z}) => {
  return (
    <div className="cube" style={{ transform: `translateX(${x * TILE_SIZE}px) translateY(${y * TILE_SIZE}px) translateZ(${z * TILE_SIZE}px)` }}>
      <div className="face top"/>
      <div className="face bottom"/>
      <div className="face front">
        <div className="side-top"/>
        <div className="side-bottom"/>
      </div>
      <div className="face back">
        <div className="side-top"/>
        <div className="side-bottom"/>
      </div>
      <div className="face left">
        <div className="side-top"/>
        <div className="side-bottom"/>
      </div>
      <div className="face right">
        <div className="side-top"/>
        <div className="side-bottom"/>
      </div>
    </div>
  );
};

export default Tile;
