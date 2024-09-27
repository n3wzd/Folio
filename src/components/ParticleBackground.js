import React from 'react';
import '../styles/ParticleBackground.css';

const ParticleBackground = () => {
  const createSparkles = () => {
    const sparkles = [];
    for (let i = 0; i < 20; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      sparkles.push(
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${left}vw`,
            top: `${top}vh`,
            animationDuration: `${Math.random() * 1 + 0.5}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      );
    }
    return sparkles;
  };

  return <div className="background">{createSparkles()}</div>;
};

export default ParticleBackground;
