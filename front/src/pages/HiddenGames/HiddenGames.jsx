import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SlideInOnScroll from '../../components/ui/SlideInOnScroll';
import { games } from '../../games/games';
import './HiddenGames.css';

function HiddenGames() {
  const { t } = useTranslation();

  return (
    <div className='hidden-games'>
      <div className='hidden-games__topbar'>
        <Link to='/' className='games-back-button'>
          <i className='fa-solid fa-arrow-left' aria-hidden='true'></i>
          <span>{t('games_back_home')}</span>
        </Link>
      </div>

      <SlideInOnScroll>
        <h1 className='hidden-games__title'>{t('games_hub_title')}</h1>
        <p className='hidden-games__subtitle'>{t('games_hub_subtitle')}</p>
      </SlideInOnScroll>

      <SlideInOnScroll>
        <ul className='hidden-games__list'>
          {games.map((game) => (
            <li key={game.id} className='hidden-games__card'>
              <Link to={`/hidden-games/${game.id}`} className='hidden-games__card-link'>
                <h2 className='hidden-games__card-title'>{t(game.titleKey)}</h2>
                <p className='hidden-games__card-desc'>{t(game.descriptionKey)}</p>
                {!game.available && (
                  <span className='hidden-games__badge'>{t('games_coming_soon')}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </SlideInOnScroll>
    </div>
  );
}

export default HiddenGames;
