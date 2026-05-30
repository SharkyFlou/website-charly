import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRpsWar } from './useRpsWar';
import { EMOJI, TYPE_LIST } from './entities';
import './RockPaperScissorsWar.css';

const MIN_COUNT = 5;
const MAX_COUNT = 60;
const DEFAULT_COUNT = 20;

function RockPaperScissorsWar() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [shakeEnabled, setShakeEnabled] = useState(true);
  const { stats, start } = useRpsWar(canvasRef, { shakeEnabled });

  const displayCounts =
    stats.status === 'idle'
      ? { rock: count, paper: count, scissors: count }
      : stats.counts;
  const total =
    displayCounts.rock + displayCounts.paper + displayCounts.scissors;
  const activeTypes = TYPE_LIST.filter((type) => displayCounts[type] > 0).length;
  const isFast = stats.status === 'running' && activeTypes === 2;
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
        <label className='rps-war__option'>
          <input
            type='checkbox'
            checked={shakeEnabled}
            onChange={(event) => setShakeEnabled(event.target.checked)}
            className='rps-war__option-input'
          />
          <span>{t('games_rps_war_shake_toggle')}</span>
        </label>
        <button type='button' className='rps-war__start' onClick={handleStart}>
          {buttonLabel}
        </button>
      </div>

      <div className='rps-war__hud'>
        <div className='rps-war__hud-emojis'>
          {TYPE_LIST.map((type) => {
            const c = displayCounts[type];
            const fraction = total === 0 ? 0 : c / total;
            return (
              <div
                key={type}
                className='rps-war__hud-emoji-cell'
                style={{ flexGrow: c, flexBasis: 0 }}
              >
                {c > 0 && (
                  <span
                    className='rps-war__hud-emoji'
                    style={{ '--fraction': fraction }}
                    aria-hidden='true'
                  >
                    {EMOJI[type]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <div
          className='rps-war__hud-bar'
          role='img'
          aria-label={`${displayCounts.rock} / ${displayCounts.paper} / ${displayCounts.scissors}`}
        >
          {TYPE_LIST.map((type) => (
            <div
              key={type}
              className={`rps-war__hud-segment rps-war__hud-segment--${type}${
                stats.winner === type ? ' is-winner' : ''
              }`}
              style={{ flexGrow: displayCounts[type], flexBasis: 0 }}
            />
          ))}
        </div>
      </div>

      <div className={`rps-war__arena${isFast ? ' is-fast' : ''}`}>
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
