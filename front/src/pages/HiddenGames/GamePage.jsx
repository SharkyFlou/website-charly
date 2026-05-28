import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Rain from '../../components/effects/Rain';
import SlideInOnScroll from '../../components/ui/SlideInOnScroll';
import { findGame } from '../../games/games';
import './HiddenGames.css';

function GamePage() {
  const { t } = useTranslation();
  const { gameId } = useParams();
  const game = findGame(gameId);

  if (!game) {
    return (
      <>
        <Rain />
        <div className='hidden-games'>
          <div className='hidden-games__topbar'>
            <Link to='/hidden-games' className='games-back-button'>
              <i className='fa-solid fa-arrow-left' aria-hidden='true'></i>
              <span>{t('games_back_hub')}</span>
            </Link>
          </div>
          <SlideInOnScroll>
            <h1 className='hidden-games__title'>{t('games_not_found')}</h1>
          </SlideInOnScroll>
        </div>
      </>
    );
  }

  const GameComponent = game.component;

  return (
    <>
      <Rain />
      <div className='hidden-games'>
        <div className='hidden-games__topbar'>
          <Link to='/hidden-games' className='games-back-button'>
            <i className='fa-solid fa-arrow-left' aria-hidden='true'></i>
            <span>{t('games_back_hub')}</span>
          </Link>
        </div>

        <SlideInOnScroll>
          <h1 className='hidden-games__title'>{t(game.titleKey)}</h1>
        </SlideInOnScroll>

        <SlideInOnScroll>
          <main className='hidden-games__game-host'>
            <GameComponent />
          </main>
        </SlideInOnScroll>
      </div>
    </>
  );
}

export default GamePage;
