export const TYPES = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
};

export const TYPE_LIST = [TYPES.ROCK, TYPES.PAPER, TYPES.SCISSORS];

// BEATS[x] = the type that x hunts (its prey).
export const BEATS = {
  [TYPES.ROCK]: TYPES.SCISSORS,
  [TYPES.PAPER]: TYPES.ROCK,
  [TYPES.SCISSORS]: TYPES.PAPER,
};

// PREDATOR_OF[x] = the type that hunts x.
export const PREDATOR_OF = Object.fromEntries(
  Object.entries(BEATS).map(([predator, prey]) => [prey, predator])
);

export const EMOJI = {
  [TYPES.ROCK]: '🪨',
  [TYPES.PAPER]: '📜',
  [TYPES.SCISSORS]: '✂️',
};
