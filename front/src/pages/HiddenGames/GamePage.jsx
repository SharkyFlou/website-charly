import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findGame } from '../../games/games';
import './HiddenGames.css';

function GamePage() {
  const { t } = useTranslation();
  const { gameId } = useParams();
  const game = findGame(gameId);

  if (!game) {
    return (
      <div className='hidden-games'>
        <header className='hidden-games__header'>
          <Link to='/hidden-games' className='hidden-games__back'>
            {t('games_back_hub')}
          </Link>
          <h1 className='hidden-games__title'>{t('games_not_found')}</h1>
        </header>
      </div>
    );
  }

  const GameComponent = game.component;

  return (
    <div className='hidden-games'>
      <header className='hidden-games__header'>
        <Link to='/hidden-games' className='hidden-games__back'>
          {t('games_back_hub')}
        </Link>
        <h1 className='hidden-games__title'>{t(game.titleKey)}</h1>
      </header>
      <main className='hidden-games__game-host'>
        <GameComponent />
      </main>
    </div>
  );
}

export default GamePage;
