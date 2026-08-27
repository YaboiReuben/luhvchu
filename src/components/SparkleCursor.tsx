import { useEffect, useRef } from 'react';

interface SparkleParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  char: string;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

const SPARKLE_CHARS = ['✦', '✧', '⋆', '˚', '₊', '⊹', '♡'];
const SPARKLE_COLORS_LIGHT = ['#FF8FAB', '#FFB6D2', '#CDB4FF', '#E6D7FF', '#FFD6E7', '#FF9EAA'];
const SPARKLE_COLORS_DARK = ['#FFB6D2', '#E6D7FF', '#CDB4FF', '#FFE699', '#FF8FAB', '#D8B4FE'];

export function SparkleCursor({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: SparkleParticle[] = [];
    let lastX = 0;
    let lastY = 0;
    let throttle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      throttle++;

      // Create sparkles as mouse travels
      if (dist > 6 || throttle % 3 === 0) {
        lastX = e.clientX;
        lastY = e.clientY;

        const colors = isDark ? SPARKLE_COLORS_DARK : SPARKLE_COLORS_LIGHT;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const char = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.3;

        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4, // float gently upward
          size: Math.random() * 8 + 12,
          char,
          color,
          alpha: 1,
          life: 0,
          maxLife: Math.random() * 25 + 25,
        });

        // Limit particles for optimal FPS
        if (particles.length > 50) {
          particles.shift();
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha = 1 - p.life / p.maxLife;

        if (p.alpha <= 0 || p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.font = `${p.size}px "Fredoka", "Quicksand", sans-serif`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = p.color;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    />
  );
}
