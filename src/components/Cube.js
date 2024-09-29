import React from 'react';
import '../styles/Cube.css';

const Cube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="face front"/>
        <div className="face back"/>
        <div className="face right"/>
        <div className="face left"/>
        <div className="face top"/>
        <div className="face bottom"/>
      </div>
    </div>
  );
};

export default Cube;
