import { describe, it, expect } from 'vitest';
import {
  createWorld,
  step,
  countByType,
  getWinner,
  DEFAULT_CONFIG,
} from './engine';

const baseConfig = {
  ...DEFAULT_CONFIG,
  counts: { rock: 0, paper: 0, scissors: 0 },
  arena: { width: 400, height: 400 },
};

function worldWith(entities) {
  return { entities, config: baseConfig };
}

describe('createWorld', () => {
  it('spawns the configured number of each type', () => {
    const world = createWorld(
      { ...baseConfig, counts: { rock: 5, paper: 3, scissors: 7 } },
      () => 0.5
    );
    const counts = countByType(world.entities);
    expect(counts).toEqual({ rock: 5, paper: 3, scissors: 7 });
  });

  it('spawns entities inside the arena bounds', () => {
    const world = createWorld(
      { ...baseConfig, counts: { rock: 30, paper: 0, scissors: 0 } },
      Math.random
    );
    const { radius, arena } = baseConfig;
    for (const e of world.entities) {
      expect(e.x).toBeGreaterThanOrEqual(radius);
      expect(e.x).toBeLessThanOrEqual(arena.width - radius);
      expect(e.y).toBeGreaterThanOrEqual(radius);
      expect(e.y).toBeLessThanOrEqual(arena.height - radius);
    }
  });
});

describe('collisions', () => {
  it('rock converts scissors into rock', () => {
    const world = worldWith([
      { id: 0, type: 'rock', x: 100, y: 100, vx: 0, vy: 0 },
      { id: 1, type: 'scissors', x: 110, y: 100, vx: 0, vy: 0 },
    ]);
    step(world, 0);
    expect(world.entities[1].type).toBe('rock');
  });

  it('scissors converts paper into scissors', () => {
    const world = worldWith([
      { id: 0, type: 'scissors', x: 100, y: 100, vx: 0, vy: 0 },
      { id: 1, type: 'paper', x: 110, y: 100, vx: 0, vy: 0 },
    ]);
    step(world, 0);
    expect(world.entities[1].type).toBe('scissors');
  });

  it('paper converts rock into paper', () => {
    const world = worldWith([
      { id: 0, type: 'paper', x: 100, y: 100, vx: 0, vy: 0 },
      { id: 1, type: 'rock', x: 110, y: 100, vx: 0, vy: 0 },
    ]);
    step(world, 0);
    expect(world.entities[1].type).toBe('paper');
  });

  it('does not transform when entities are out of contact radius', () => {
    const world = worldWith([
      { id: 0, type: 'rock', x: 100, y: 100, vx: 0, vy: 0 },
      { id: 1, type: 'scissors', x: 300, y: 100, vx: 0, vy: 0 },
    ]);
    step(world, 0);
    expect(world.entities[1].type).toBe('scissors');
  });

  it('does not transform two entities of the same type', () => {
    const world = worldWith([
      { id: 0, type: 'rock', x: 100, y: 100, vx: 0, vy: 0 },
      { id: 1, type: 'rock', x: 110, y: 100, vx: 0, vy: 0 },
    ]);
    step(world, 0);
    expect(world.entities[0].type).toBe('rock');
    expect(world.entities[1].type).toBe('rock');
  });

  it('returns the number of transformations from step', () => {
    const world = worldWith([
      { id: 0, type: 'rock', x: 100, y: 100, vx: 0, vy: 0 },
      { id: 1, type: 'scissors', x: 110, y: 100, vx: 0, vy: 0 },
      { id: 2, type: 'paper', x: 200, y: 100, vx: 0, vy: 0 },
      { id: 3, type: 'rock', x: 210, y: 100, vx: 0, vy: 0 },
    ]);
    expect(step(world, 0)).toBe(2);
  });

  it('returns 0 from step when no entities collide', () => {
    const world = worldWith([
      { id: 0, type: 'rock', x: 100, y: 100, vx: 0, vy: 0 },
      { id: 1, type: 'scissors', x: 300, y: 300, vx: 0, vy: 0 },
    ]);
    expect(step(world, 0)).toBe(0);
  });
});

describe('getWinner', () => {
  it('returns null while multiple types remain', () => {
    expect(
      getWinner([
        { type: 'rock' },
        { type: 'paper' },
      ])
    ).toBeNull();
  });

  it('returns the surviving type when only one remains', () => {
    expect(
      getWinner([
        { type: 'scissors' },
        { type: 'scissors' },
        { type: 'scissors' },
      ])
    ).toBe('scissors');
  });
});
