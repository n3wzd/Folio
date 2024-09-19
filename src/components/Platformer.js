import React, { useState, useRef, useEffect } from "react";
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
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateX = (clientX - centerX) / 20;
    const rotateY = (clientY - centerY) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.5 });

    if (sceneContainerRef.current) {
      observer.observe(sceneContainerRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (sceneContainerRef.current) {
        observer.unobserve(sceneContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="scene-appear-animation" ref={sceneContainerRef}>
      <div className="scene-rotation-animation" style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation.x}deg)`,
        }}>
        <div className="scene">
          {cubes.map((position, index) => (
            <Tile key={index} x={position.x} y={position.y} z={position.z} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platformer;
