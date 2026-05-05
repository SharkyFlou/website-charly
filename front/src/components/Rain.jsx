import './Rain.css';
import RainParticle from './RainParticle';
import { RAIN_TYPES, useSeasonalRain } from '../hooks/useSeasonalRain';

const TOGGLE_ICON_BY_TYPE = {
  [RAIN_TYPES.SNOW]: '/images/rains/snow_flake.png',
  [RAIN_TYPES.LEAF]: '/images/rains/leaf1.png',
  [RAIN_TYPES.SAKURA]: '/images/rains/sakura_big.png',
};

function Rain() {
  const { activeType, isActive, particles, toggle } = useSeasonalRain();

  if (!activeType) return null;

  return (
    <>
      <div className="rain-container" id="rain_container_id">
        {isActive && particles.map((p) => <RainParticle key={p.id} particle={p} />)}
      </div>
      <button
        className={isActive ? 'rain-button active' : 'rain-button'}
        onClick={toggle}
        aria-label="toggle seasonal rain"
      >
        <img src={TOGGLE_ICON_BY_TYPE[activeType]} alt="" />
      </button>
    </>
  );
}

export default Rain;
