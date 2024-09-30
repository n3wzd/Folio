import React, { useEffect, useRef } from 'react';

const MeshAnimation = () => {
    const canvasRef = useRef(null);
    const numDots = 6;

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
            constructor() {
                this.base = new Point(Math.random() * (canvas.width - 100) + 50, Math.random() * (canvas.height - 100) + 50);
                this.position = new Point(this.base.x + Math.random() * 30, this.base.y + Math.random() * 30);
                this.speed = new Point(0, 0);
                this.perspective = Math.random() * 100;
            }

            get opacity() {
                return (1 - this.perspective / 100) * 0.8;
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

            direction(a, b) {
                return Math.atan2(b.y - a.y, b.x - a.x);
            }
          
            update() {
                const dist = this.distance(this.base, this.position);
                const angle = this.direction(this.base, this.position);
                const acceleration = new Point(this.base.x - this.position.x, this.base.y - this.position.y);

                const speedFactor = (1 - this.perspective / 100) * 0.001;
                this.speed.x += acceleration.x * speedFactor;
                this.speed.y += acceleration.y * speedFactor;

                this.position.x += this.speed.x;
                this.position.y += this.speed.y;
            }
        }

        const dots = Array.from({ length: numDots }, () => new Dot());

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

            drawLines(ctx);
            requestAnimationFrame(animate);
        };

        const drawLines = (ctx) => {
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const gradient = ctx.createLinearGradient(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
                    gradient.addColorStop(0, `rgba(0, 150, 255, ${dots[i].opacity})`);
                    gradient.addColorStop(1, `rgba(0, 150, 255, ${dots[j].opacity})`);

                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default MeshAnimation;
