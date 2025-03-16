import React, { useEffect, useRef } from 'react';
import './HeroBackground.css';
import heroBackground from '../assets/hero-bg'; // Import the background helper

// Define Particle class outside component to avoid re-creation on each render
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  maxWidth: number;
  maxHeight: number;
  
  constructor(canvasWidth: number, canvasHeight: number) {
    this.maxWidth = canvasWidth;
    this.maxHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    
    // Create a more vibrant purple/violet gradient palette
    const colors = [
      'rgba(157, 78, 221, 0.8)',  // Primary purple - more opaque
      'rgba(120, 60, 180, 0.7)',  // Darker purple
      'rgba(180, 100, 240, 0.6)', // Lighter purple
      'rgba(200, 120, 255, 0.5)'  // Violet
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Bounce off edges
    if (this.x > this.maxWidth || this.x < 0) this.speedX = -this.speedX;
    if (this.y > this.maxHeight || this.y < 0) this.speedY = -this.speedY;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size with high resolution for retina displays
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      // Reset styles after resize
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    // Mouse interaction
    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150 // Mouse influence radius
    };
    
    canvas.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mouseleave', function() {
      mouse.x = undefined;
      mouse.y = undefined;
    });
    
    // Now that we have canvas dimensions, create particles
    const particles: Particle[] = [];
    const particleCount = Math.min(120, Math.floor(canvas.width / 8));
    
    for (let i = 0; i < particleCount; i++) {
      // Pass canvas dimensions to Particle constructor
      particles.push(new Particle(canvas.width, canvas.height));
    }
    
    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      const maxDistance = 120;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Create a gradient for the connection line
            const opacity = 0.2 * (1 - distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(157, 78, 221, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear canvas with a slight fade effect for smoother animation
      ctx.fillStyle = 'rgba(16, 0, 43, 0.2)'; // Dark background with opacity for trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle grid pattern
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = 'rgba(157, 78, 221, 0.1)';
      
      // Vertical lines - more spaced out for cleaner look
      for (let x = 0; x <= canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        // Add mouse interaction
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Particles flee from mouse
          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const forceX = Math.cos(angle) * 0.5;
            const forceY = Math.sin(angle) * 0.5;
            
            particles[i].x += forceX;
            particles[i].y += forceY;
          }
        }
        
        particles[i].update();
        particles[i].draw(ctx);
      }
      
      connectParticles();
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize);
      canvas.removeEventListener('mousemove', function() {});
      canvas.removeEventListener('mouseleave', function() {});
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      className="hero-background-container"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero-orbs">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-gradient-overlay"></div>
      <div className="hero-glow"></div>
    </div>
  );
};

export default HeroBackground;
