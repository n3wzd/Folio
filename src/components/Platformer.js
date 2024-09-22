import React, { useRef, useEffect } from "react";
import Tile from "./Tile.js"
import "../styles/Platformer.css";

function makeCube(x, y, z) {
  return {x: x, y: y, z: z};
}

const Platformer = () => {
  const cubes = [
    makeCube(3, 2, -3),
    makeCube(2, 2, -3),
    makeCube(3, 2, -2),
    makeCube(1, 2, -3),
    makeCube(2, 2, -2),
    makeCube(3, 2, -1),
    makeCube(0, 3, -3),
    makeCube(1, 3, -2),
    makeCube(2, 3, -1),
    makeCube(3, 3, 0),
    makeCube(3, 4, 0),
    makeCube(2, 4, 0),
    makeCube(1, 4, 0),
    makeCube(1, 4, -1),
    makeCube(0, 4, -3),
    makeCube(0, 4, -2),
    makeCube(0, 4, -1),
    makeCube(0, 4, 0),
  ]
  const sceneContainerRef = useRef(null);

  useEffect(() => {
    const sceneContainer = sceneContainerRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });

    if (sceneContainer) {
      observer.observe(sceneContainer);
    }

    return () => {
      if (sceneContainer) {
        observer.unobserve(sceneContainer);
      }
    };
  }, []);

  return (
    <div className="scene-appear-animation" ref={sceneContainerRef}>
      <div className="scene">
        {cubes.map((position, index) => (
          <Tile key={index} x={position.x} y={position.y} z={position.z} />
        ))}
      </div>
    </div>
  );
};

export default Platformer;
