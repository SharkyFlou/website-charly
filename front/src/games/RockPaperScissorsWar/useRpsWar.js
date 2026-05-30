import { useCallback, useEffect, useRef, useState } from 'react';
import { createWorld, step, countByType, getWinner, DEFAULT_CONFIG } from './engine';
import { EMOJI } from './entities';

const MAX_DT = 1 / 30;
const STATS_THROTTLE_MS = 100;

// Screen-shake tuning. Each transformation adds SHAKE_PER_HIT to a running
// intensity that decays multiplicatively each frame; MAX_SHAKE caps how
// strong it can get when many entities are eaten at once.
const SHAKE_PER_HIT = 1.2;
const SHAKE_DECAY = 0.82;
const MAX_SHAKE = 8;
const SHAKE_PIXELS_PER_UNIT = 1.5;
const SHAKE_MIN_VISIBLE = 0.05;

const initialStats = () => ({
  counts: { rock: 0, paper: 0, scissors: 0 },
  winner: null,
  status: 'idle',
});

export function useRpsWar(canvasRef, { shakeEnabled = true } = {}) {
  const worldRef = useRef(null);
  const rafRef = useRef(0);
  const lastStatsAtRef = useRef(0);
  const shakeEnabledRef = useRef(shakeEnabled);
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    shakeEnabledRef.current = shakeEnabled;
  }, [shakeEnabled]);

  const start = useCallback(
    (countsOverride) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const counts = { ...DEFAULT_CONFIG.counts, ...countsOverride };
      const total = counts.rock + counts.paper + counts.scissors;
      if (total === 0) return;

      cancelAnimationFrame(rafRef.current);
      const config = { ...DEFAULT_CONFIG, counts };
      worldRef.current = createWorld(config);
      const ctx = setupCanvas(canvas, config);
      canvas.style.transform = '';

      setStats({
        counts: countByType(worldRef.current.entities),
        winner: null,
        status: 'running',
      });

      let lastTime = performance.now();
      let shake = 0;
      lastStatsAtRef.current = lastTime;

      const loop = (now) => {
        const dt = Math.min((now - lastTime) / 1000, MAX_DT);
        lastTime = now;

        const world = worldRef.current;
        const transformations = step(world, dt);
        if (shakeEnabledRef.current) {
          shake = Math.min(MAX_SHAKE, shake * SHAKE_DECAY + transformations * SHAKE_PER_HIT);
        } else {
          shake = 0;
        }
        render(ctx, world);
        applyShake(canvas, shake);

        const winner = getWinner(world.entities);
        if (now - lastStatsAtRef.current > STATS_THROTTLE_MS || winner) {
          lastStatsAtRef.current = now;
          setStats({
            counts: countByType(world.entities),
            winner,
            status: winner ? 'finished' : 'running',
          });
        }

        if (winner === null) {
          rafRef.current = requestAnimationFrame(loop);
        }
      };

      rafRef.current = requestAnimationFrame(loop);
    },
    [canvasRef]
  );

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return { stats, start };
}

function setupCanvas(canvas, config) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = config.arena.width * dpr;
  canvas.height = config.arena.height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

function render(ctx, world) {
  const { entities, config } = world;
  ctx.clearRect(0, 0, config.arena.width, config.arena.height);
  ctx.font = `${config.radius * 2}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const e of entities) {
    ctx.fillText(EMOJI[e.type], e.x, e.y);
  }
}

function applyShake(canvas, intensity) {
  if (intensity < SHAKE_MIN_VISIBLE) {
    if (canvas.style.transform) canvas.style.transform = '';
    return;
  }
  const dx = (Math.random() - 0.5) * intensity * SHAKE_PIXELS_PER_UNIT;
  const dy = (Math.random() - 0.5) * intensity * SHAKE_PIXELS_PER_UNIT;
  canvas.style.transform = `translate(${dx}px, ${dy}px)`;
}
