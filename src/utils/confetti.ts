import confetti from 'canvas-confetti';

export function fireHeartConfetti() {
  const count = 30;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 45,
    colors: ['#FFB6D2', '#FFD6E7', '#CDB4FF', '#FF8FAB', '#FFF8EE'],
  });
  fire(0.2, {
    spread: 60,
    colors: ['#FFB6D2', '#FFD6E7', '#E6D7FF', '#CFF5E7'],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#FF8FAB', '#FFB6D2', '#FFFFFF', '#CDB4FF'],
  });
}

export function fireSparkleBurst(x?: number, y?: number) {
  const origin = x !== undefined && y !== undefined
    ? { x: x / window.innerWidth, y: y / window.innerHeight }
    : { y: 0.6 };

  confetti({
    particleCount: 25,
    spread: 50,
    origin,
    zIndex: 9999,
    colors: ['#FFB6D2', '#FFD6E7', '#CDB4FF', '#FFE4E1', '#FFF9E6'],
    ticks: 120,
    gravity: 0.8,
    scalar: 0.9,
    shapes: ['circle'],
  });
}
