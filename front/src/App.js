import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import HomePage from './pages/HomePage';
import HiddenGames from './pages/HiddenGames/HiddenGames';
import GamePage from './pages/HiddenGames/GamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hidden-games' element={<HiddenGames />} />
        <Route path='/hidden-games/:gameId' element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
