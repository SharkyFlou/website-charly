import RockPaperScissorsWar from './RockPaperScissorsWar/RockPaperScissorsWar';

// To add a new game: drop its component in a sibling folder and append an
// entry here. The hub page and the /hidden-games/:gameId route auto-pick it up.
export const games = [
  {
    id: 'rock-paper-scissors-war',
    titleKey: 'games_rps_war_title',
    descriptionKey: 'games_rps_war_desc',
    component: RockPaperScissorsWar,
    available: true,
  },
];

export const findGame = (id) => games.find((game) => game.id === id);
