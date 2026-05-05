import { useEffect, useMemo, useState } from 'react';

export const RAIN_TYPES = {
  SNOW: 'snow',
  LEAF: 'leaf',
  SAKURA: 'sakura',
};

const SEASON_BY_MONTH = {
  0: RAIN_TYPES.SNOW,
  1: RAIN_TYPES.SNOW,
  11: RAIN_TYPES.SNOW,
  8: RAIN_TYPES.LEAF,
  9: RAIN_TYPES.LEAF,
  10: RAIN_TYPES.LEAF,
  2: RAIN_TYPES.SAKURA,
  3: RAIN_TYPES.SAKURA,
  4: RAIN_TYPES.SAKURA,
};

const PARTICLE_VARIANTS = 7;

const buildParticles = (type) => {
  if (!type) return [];
  const count = 40 + Math.min(window.innerWidth / 50, 30);
  const speedDifMax = Math.min(window.innerHeight / 100, 5);
  const speedBase = 15 + Math.max(((1200 - window.innerHeight) / 500) * 10, 0);

  return Array.from({ length: Math.floor(count) }, (_, i) => {
    const speed = speedBase + Math.random() * speedDifMax;
    const isImage = type !== RAIN_TYPES.SNOW;
    const size = isImage ? 50 : Math.random() * 15 + 5;
    const variant = (i % PARTICLE_VARIANTS) + 1;

    return {
      id: i,
      type,
      left: `${Math.random() * 100}%`,
      size,
      speed,
      delay: Math.random() * speed,
      opacity: Math.random() * 0.5 + 0.3,
      animClass: `rain_anim${(i % 3) + 1}`,
      blurry: i % 3 === 0,
      backgroundImage: isImage ? `/images/rains/${type}${variant}.png` : null,
    };
  });
};

export function useSeasonalRain(startDelayMs = 2000) {
  const [activeType, setActiveType] = useState(null);

  const seasonType = useMemo(() => SEASON_BY_MONTH[new Date().getMonth()] ?? null, []);

  useEffect(() => {
    if (!seasonType) return undefined;
    const id = window.setTimeout(() => setActiveType(seasonType), startDelayMs);
    return () => window.clearTimeout(id);
  }, [seasonType, startDelayMs]);

  const particles = useMemo(() => buildParticles(activeType), [activeType]);

  const toggle = () => setActiveType((current) => (current ? null : seasonType));

  return { activeType: activeType ?? seasonType, isActive: Boolean(activeType), particles, toggle };
}
