import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRpsWar } from './useRpsWar';
import { EMOJI, TYPE_LIST } from './entities';
import './RockPaperScissorsWar.css';

const MIN_COUNT = 5;
const MAX_COUNT = 20;
const DEFAULT_COUNT = 10;

function RockPaperScissorsWar() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const { stats, start } = useRpsWar(canvasRef);

  const displayCounts =
    stats.status === 'idle'
      ? { rock: count, paper: count, scissors: count }
      : stats.counts;
  const buttonLabel =
    stats.status === 'idle' ? t('games_rps_war_start') : t('games_rps_war_restart');

  const handleStart = () => {
    start({ rock: count, paper: count, scissors: count });
  };

  return (
    <div className='rps-war'>
      <div className='rps-war__controls'>
        <label className='rps-war__slider'>
          <span className='rps-war__slider-emoji' aria-hidden='true'>
            {TYPE_LIST.map((type) => EMOJI[type]).join(' ')}
          </span>
          <input
            type='range'
            min={MIN_COUNT}
            max={MAX_COUNT}
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
            className='rps-war__slider-input'
            aria-label={t('games_rps_war_slider_count')}
          />
          <span className='rps-war__slider-value'>{count}</span>
        </label>
        <button type='button' className='rps-war__start' onClick={handleStart}>
          {buttonLabel}
        </button>
      </div>

      <div className='rps-war__hud'>
        {TYPE_LIST.map((type) => (
          <div
            key={type}
            className={`rps-war__chip rps-war__chip--${type}${
              stats.winner === type ? ' is-winner' : ''
            }${displayCounts[type] === 0 ? ' is-extinct' : ''}`}
          >
            <span className='rps-war__chip-emoji' aria-hidden='true'>
              {EMOJI[type]}
            </span>
            <span className='rps-war__chip-count'>{displayCounts[type]}</span>
          </div>
        ))}
      </div>

      <div className='rps-war__arena'>
        <canvas ref={canvasRef} className='rps-war__canvas' />
        {stats.winner && (
          <div className='rps-war__overlay'>
            <p className='rps-war__winner-emoji' aria-hidden='true'>
              {EMOJI[stats.winner]}
            </p>
            <p className='rps-war__winner-text'>
              {t(`games_rps_war_winner_${stats.winner}`)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RockPaperScissorsWar;
