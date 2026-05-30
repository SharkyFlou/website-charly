import { TYPE_LIST, BEATS, PREDATOR_OF } from './entities';

export const DEFAULT_CONFIG = {
  counts: { rock: 10, paper: 10, scissors: 10 },
  arena: { width: 800, height: 500 },
  radius: 14,
  maxSpeed: 95,
  preyAttraction: 75,
  predatorRepulsion: 55,
  predatorRange: 110,
  wallBounce: 0.5,
};

export function createWorld(config = DEFAULT_CONFIG, rng = Math.random) {
  const entities = [];
  let id = 0;
  for (const type of TYPE_LIST) {
    const count = config.counts[type] ?? 0;
    for (let i = 0; i < count; i++) {
      entities.push({
        id: id++,
        type,
        x: config.radius + rng() * (config.arena.width - 2 * config.radius),
        y: config.radius + rng() * (config.arena.height - 2 * config.radius),
        vx: 0,
        vy: 0,
      });
    }
  }
  return { entities, config };
}

// Once a type goes extinct, the cycle collapses to a 2-way chase; we scale
// the simulation timestep so the remaining entities visibly speed up.
const SPEED_BOOST_MULTIPLIER = 2;

export function step(world, dt) {
  const activeTypes = countActiveTypes(world.entities);
  const effectiveDt = activeTypes <= 2 ? dt * SPEED_BOOST_MULTIPLIER : dt;
  applyForces(world, effectiveDt);
  integrate(world, effectiveDt);
  return resolveCollisions(world);
}

function countActiveTypes(entities) {
  const seen = new Set();
  for (const e of entities) seen.add(e.type);
  return seen.size;
}

function applyForces(world, dt) {
  const { entities, config } = world;
  const { preyAttraction, predatorRepulsion, predatorRange } = config;
  const rangeSq = predatorRange * predatorRange;

  for (const e of entities) {
    const preyType = BEATS[e.type];
    const predatorType = PREDATOR_OF[e.type];
    let ax = 0;
    let ay = 0;

    let nearestPrey = null;
    let nearestPreyDistSq = Infinity;

    for (const other of entities) {
      if (other === e) continue;
      const dx = other.x - e.x;
      const dy = other.y - e.y;
      const distSq = dx * dx + dy * dy;
      if (distSq === 0) continue;

      if (other.type === preyType && distSq < nearestPreyDistSq) {
        nearestPreyDistSq = distSq;
        nearestPrey = other;
      } else if (other.type === predatorType && distSq < rangeSq) {
        const dist = Math.sqrt(distSq);
        const falloff = 1 - dist / predatorRange;
        ax -= (dx / dist) * predatorRepulsion * falloff;
        ay -= (dy / dist) * predatorRepulsion * falloff;
      }
    }

    if (nearestPrey) {
      const dx = nearestPrey.x - e.x;
      const dy = nearestPrey.y - e.y;
      const dist = Math.sqrt(nearestPreyDistSq);
      ax += (dx / dist) * preyAttraction;
      ay += (dy / dist) * preyAttraction;
    }

    e.vx += ax * dt;
    e.vy += ay * dt;
  }
}

function integrate(world, dt) {
  const { entities, config } = world;
  const { arena, radius, maxSpeed, wallBounce } = config;

  for (const e of entities) {
    const speed = Math.hypot(e.vx, e.vy);
    if (speed > maxSpeed) {
      e.vx = (e.vx / speed) * maxSpeed;
      e.vy = (e.vy / speed) * maxSpeed;
    }

    e.x += e.vx * dt;
    e.y += e.vy * dt;

    if (e.x < radius) {
      e.x = radius;
      e.vx = -e.vx * wallBounce;
    } else if (e.x > arena.width - radius) {
      e.x = arena.width - radius;
      e.vx = -e.vx * wallBounce;
    }
    if (e.y < radius) {
      e.y = radius;
      e.vy = -e.vy * wallBounce;
    } else if (e.y > arena.height - radius) {
      e.y = arena.height - radius;
      e.vy = -e.vy * wallBounce;
    }
  }
}

function resolveCollisions(world) {
  const { entities, config } = world;
  const collideDist = config.radius * 2;
  const collideDistSq = collideDist * collideDist;
  let transformations = 0;

  for (let i = 0; i < entities.length; i++) {
    for (let j = i + 1; j < entities.length; j++) {
      const a = entities[i];
      const b = entities[j];
      if (a.type === b.type) continue;
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      if (dx * dx + dy * dy > collideDistSq) continue;
      if (BEATS[a.type] === b.type) {
        b.type = a.type;
        transformations++;
      } else if (BEATS[b.type] === a.type) {
        a.type = b.type;
        transformations++;
      }
    }
  }
  return transformations;
}

export function countByType(entities) {
  const counts = { rock: 0, paper: 0, scissors: 0 };
  for (const e of entities) counts[e.type]++;
  return counts;
}

export function getWinner(entities) {
  const counts = countByType(entities);
  const remaining = TYPE_LIST.filter((type) => counts[type] > 0);
  return remaining.length === 1 ? remaining[0] : null;
}
