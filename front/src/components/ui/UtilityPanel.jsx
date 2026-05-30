import { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import LanguageSelector from './LanguageSelector';
import './UtilityPanel.css';

function UtilityPanel() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={clicked ? 'utility-panel clicked' : 'utility-panel'}
      onClick={() => setClicked((prev) => !prev)}
      onMouseLeave={() => setClicked(false)}
    >
      <i className='fa-solid fa-arrow-left' />
      <LanguageSelector />
      <DarkModeToggle />
    </div>
  );
}

export default UtilityPanel;
