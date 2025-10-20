"use client";

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dataStreamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: any[] = [];
    const particleCount = 70;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;
      opacity: number = 1;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 1;
        this.speedX = (Math.random() * 1 - 0.5) * 0.5;
        this.speedY = (Math.random() * 1 - 0.5) * 0.5;
        this.color = Math.random() > 0.1 ? '#06f9f9' : '#f906f9';
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.opacity = this.life / this.maxLife;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        if(!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    let animationFrameId: number;
    function animate() {
      if(!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(6, 249, 249, 0.05)';
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          particles.push(new Particle());
        }
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      if(!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', handleResize);

    const streamContainer = document.getElementById('data-stream-container');
    let streamInterval: NodeJS.Timeout | null = null;
    if (streamContainer) {
      const createStream = () => {
        const stream = document.createElement('div');
        stream.className = 'absolute text-primary text-xs opacity-20';
        stream.style.left = `${Math.random() * 100}%`;
        stream.style.animation = `data-fall ${Math.random() * 5 + 5}s linear forwards`;
        stream.innerHTML = Array(Math.floor(Math.random() * 20) + 10).fill(0).map(() => Math.round(Math.random())).join('');
        streamContainer.appendChild(stream);
        stream.addEventListener('animationend', () => {
          stream.remove();
        });
      };
      streamInterval = setInterval(createStream, 200);
    }
    
    // Parallax effect
    const handleScroll = () => {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0');
            (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
    document.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      if (streamInterval) clearInterval(streamInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-30" />;
}
