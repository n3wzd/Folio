import React, { useEffect, useRef } from 'react';

const MeshAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            const parent = canvas.parentNode;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
        }

        class Dot {
            constructor(xr, yr, pers) {
                this.base = new Point(canvas.width * xr, canvas.height * yr);
                this.position = new Point(this.base.x, this.base.y);
                this.radius = Math.random() * 20;
                this.angle = Math.random() * 360;
                this.angularVelocity = 0.05;
                this.perspective = pers + (Math.random() - 0.5) * 0.1;
            }

            get opacity() {
                return (1 - this.perspective) * 0.8;
            }

            get x() {
                return this.position.x;
            }

            get y() {
                return this.position.y;
            }

            distance(a, b) {
                return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
            }
          
            update() {
                const speedFactor = (1 - this.perspective) * 0.01;
                this.angle = (this.angle + this.angularVelocity * speedFactor) % 360;
                this.position.x = this.base.x + this.radius * Math.cos(this.angle * (180 / Math.PI));
                this.position.y = this.base.y + this.radius * Math.sin(this.angle * (180 / Math.PI));
            }
        }

        const dots = [
            new Dot(0.57, 0.10, 0.7),
            new Dot(0.37, 0.60, 0.7),
            new Dot(0.87, 0.80, 0.7),
            new Dot(0.90, 0.20, 0.7),
            new Dot(0.62, 0.30, 0.4),
            new Dot(0.72, 0.55, 0.9),
        ];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                dot.update();
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 150, 255, ${dot.opacity})`;
                ctx.fill();
                ctx.closePath();
            });

            drawLines(dots[0], dots[1]);
            drawLines(dots[1], dots[2]);
            drawLines(dots[2], dots[3]);
            drawLines(dots[3], dots[0]);
            drawLines(dots[0], dots[4]);
            drawLines(dots[1], dots[4]);
            drawLines(dots[2], dots[4]);
            drawLines(dots[3], dots[4]);
            drawLines(dots[0], dots[5]);
            drawLines(dots[1], dots[5]);
            drawLines(dots[2], dots[5]);
            drawLines(dots[3], dots[5]);
            requestAnimationFrame(animate);
        };

        const drawLines = (A, B) => {
            const gradient = ctx.createLinearGradient(A.x, A.y, B.x, B.y);
            gradient.addColorStop(0, `rgba(0, 150, 255, ${A.opacity})`);
            gradient.addColorStop(1, `rgba(0, 150, 255, ${B.opacity})`);

            ctx.beginPath();
            ctx.moveTo(A.x, A.y);
            ctx.lineTo(B.x, B.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default MeshAnimation;
