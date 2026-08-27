import { useEffect, useRef } from 'react';

interface LoveHeartParticle {
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
  rotation: number;
  vRot: number;
}

const LOVE_HEART_CHARS = ['♡', '♥', '💕', '💖', '💗', '💓', '🌸', '✨', '🎀', '🌷'];
const HEART_COLORS_LIGHT = ['#FF6EA7', '#FF8FAB', '#FFB6D2', '#FF4D8D', '#CDB4FF', '#FF9EAA', '#FFAFCC'];
const HEART_COLORS_DARK = ['#FF8FAB', '#FFB6D2', '#FF6EA7', '#E6D7FF', '#CDB4FF', '#FFDFBA', '#D8B4FE'];

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

    const particles: LoveHeartParticle[] = [];
    let lastX = -100;
    let lastY = -100;
    let throttle = 0;

    const spawnParticles = (x: number, y: number, count = 1, isBurst = false) => {
      const colors = isDark ? HEART_COLORS_DARK : HEART_COLORS_LIGHT;
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const char = LOVE_HEART_CHARS[Math.floor(Math.random() * LOVE_HEART_CHARS.length)];
        const angle = isBurst ? Math.random() * Math.PI * 2 : (Math.random() * Math.PI - Math.PI / 2) * 1.5;
        const speed = isBurst ? Math.random() * 3.5 + 1.2 : Math.random() * 1.4 + 0.4;

        particles.push({
          x: x + (Math.random() * 8 - 4),
          y: y + (Math.random() * 8 - 4),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isBurst ? 1.0 : 0.6), // float gently upward
          size: Math.random() * (isBurst ? 12 : 8) + 12,
          char,
          color,
          alpha: 1,
          life: 0,
          maxLife: Math.random() * (isBurst ? 35 : 22) + 20,
          rotation: (Math.random() - 0.5) * 0.4,
          vRot: (Math.random() - 0.5) * 0.05,
        });
      }

      if (particles.length > 70) {
        particles.splice(0, particles.length - 70);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      throttle++;

      // Create love hearts as mouse moves
      if (dist > 8 || throttle % 3 === 0) {
        lastX = e.clientX;
        lastY = e.clientY;
        spawnParticles(e.clientX, e.clientY, 1, false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY, 6, true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        p.alpha = Math.max(0, 1 - p.life / p.maxLife);

        if (p.alpha <= 0 || p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px "Fredoka", "Quicksand", sans-serif`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = p.color;
        ctx.shadowBlur = isDark ? 10 : 5;
        ctx.fillText(p.char, 0, 0);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
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
