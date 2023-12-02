import React, { useRef, useEffect, useState } from "react";

export const ParticlesWord = ({ word, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = 1200;

    let particleArray = [];

    // handle mouse
    let mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    ctx.font = "600 18px Georgia";
    ctx.fillText(word, 5, 20);
    ctx.fillText("Phrasing", 5, 40);

    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 2.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        this.color = "red";
        this.baseColor = "red";
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
          this.color = this.color === "red" ? getRandomWarmColor() : this.color;
        } else {
          this.color = this.baseColor;
          if (this.x != this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y != this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
      particleArray = [];
      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (
            textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] >
            128
          ) {
            let positionX = x;
            let positionY = y;
            particleArray.push(new Particle(positionX * 10, positionY * 10));
          }
        }
      }
    };

    init();

    const connect = () => {
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let dx = particleArray[a].x - particleArray[b].x;
          let dy = particleArray[a].y - particleArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 17) {
            ctx.strokeStyle = particleArray[a].color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ctx.strokeText("Test text", 100, 700, ["1000px"]);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      connect();
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  function getRandomWarmColor() {
    // Generate a random hue in the range of warm colors (30° to 90°)
    const randomHue = Math.floor(Math.random() * 60) + 30;

    // Return HSL color string
    return `hsl(${randomHue}, 100%, 50%)`;
  }

  return <canvas ref={canvasRef}></canvas>;
};
