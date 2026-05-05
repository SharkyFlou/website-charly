import { RAIN_TYPES } from '../../hooks/useSeasonalRain';

function RainParticle({ particle }) {
  const className = [
    particle.type === RAIN_TYPES.SNOW ? 'snowflake' : 'leaf',
    particle.animClass,
    particle.blurry ? 'blurry' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    left: particle.left,
    top: '-50px',
    width: `${particle.size}px`,
    height: `${particle.size}px`,
    animationDuration: `${particle.speed}s`,
    animationDelay: `${particle.delay}s`,
    opacity: particle.opacity,
    backgroundImage: particle.backgroundImage ? `url(${particle.backgroundImage})` : undefined,
  };

  return <div className={className} style={style} />;
}

export default RainParticle;
