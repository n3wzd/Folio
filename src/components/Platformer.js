import React from "react";
import Tile from "./Tile.js"
import "../styles/Platformer.css";

function makeCube(x, y, z) {
  return {x: x, y: y, z: z};
}

const Platformer = () => {
  const cubes = [
    makeCube(2, 0, 0),
    makeCube(1, 0, 0),
    makeCube(1, 0, -1),
    makeCube(0, 0, -2),
    makeCube(0, 0, -1),
    makeCube(0, 0, 0),
  ]

  return (
    <div className="scene">
      {cubes.map((position, index) => (
        <Tile key={index} x={position.x} y={position.y} z={position.z} />
      ))}
    </div>
  );
};

export default Platformer;
