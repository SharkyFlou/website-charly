import { useTranslation } from 'react-i18next';
import './RockPaperScissorsWar.css';

function RockPaperScissorsWar() {
  const { t } = useTranslation();

  return (
    <div className='rps-war'>
      <div className='rps-war__placeholder'>
        <div className='rps-war__icons' aria-hidden='true'>
          <span>✊</span>
          <span>✋</span>
          <span>✌️</span>
        </div>
        <h2 className='rps-war__heading'>{t('games_rps_war_title')}</h2>
        <p className='rps-war__text'>{t('games_rps_war_placeholder')}</p>
      </div>
    </div>
  );
}

export default RockPaperScissorsWar;
