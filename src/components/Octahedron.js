import React, { useEffect, useRef } from 'react';

const Octahedron = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    let angle = 0;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const a = 60;
    const h = 100;

    const vertices = [
      { x: a, y: 0, z: 0 },
      { x: 0, y: 0, z: a },
      { x: -a, y: 0, z: 0 },
      { x: 0, y: 0, z: -a },
      { x: 0, y: h, z: 0 },
      { x: 0, y: -h, z: 0 },
    ];

    const drawLine = (v1, v2) => {
      ctx.beginPath();
      ctx.moveTo(centerX + v1.x, centerY + v1.y);
      ctx.lineTo(centerX + v2.x, centerY + v2.y);
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.3)';;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const drawOctahedron = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rotatedVertices = vertices.map((v) => {
        const x = v.x * Math.cos(angle) - v.z * Math.sin(angle);
        const z = v.x * Math.sin(angle) + v.z * Math.cos(angle);
        return { x, y: v.y, z };
      });

      drawLine(rotatedVertices[0], rotatedVertices[1]);
      drawLine(rotatedVertices[1], rotatedVertices[2]);
      drawLine(rotatedVertices[2], rotatedVertices[3]);
      drawLine(rotatedVertices[3], rotatedVertices[0]);
      drawLine(rotatedVertices[0], rotatedVertices[4]);
      drawLine(rotatedVertices[1], rotatedVertices[4]);
      drawLine(rotatedVertices[2], rotatedVertices[4]);
      drawLine(rotatedVertices[3], rotatedVertices[4]);
      drawLine(rotatedVertices[0], rotatedVertices[5]);
      drawLine(rotatedVertices[1], rotatedVertices[5]);
      drawLine(rotatedVertices[2], rotatedVertices[5]);
      drawLine(rotatedVertices[3], rotatedVertices[5]);

      angle += 0.01;
      requestAnimationFrame(drawOctahedron);
    };

    drawOctahedron();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Octahedron;
