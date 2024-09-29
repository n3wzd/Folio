import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const numParticles = 100;
    const waveAmplitude = 200;
    const waveLength = 200;
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const particles = [];
      let t = 0;
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: i * (canvas.width / numParticles),
          y: canvas.height / 2,
          radius: 3,
        });
      }
  
      const drawWave = (x, y) => {
        particles.forEach((particle) => {
          particle.y = canvas.height / 2 + Math.sin((particle.x + t) / waveLength) * waveAmplitude;
          ctx.beginPath();
          ctx.arc(particle.x + x, particle.y + y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';
          ctx.fill();
        });
      }; 

      const drawAnimation = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        drawWave(0, 0);
        drawWave(12, 12);
        drawWave(24, 24);
        drawWave(36, 36);
        drawWave(48, 48);
        drawWave(60, 60);
        drawWave(72, 72);
        drawWave(84, 84);
  
        t += 1;
        requestAnimationFrame(drawAnimation);
      };
  
      drawAnimation();
  
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return <canvas ref={canvasRef} />;
};

export default ParticleBackground;
