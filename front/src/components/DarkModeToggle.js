import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './DarkModeToggle.css';

const DARK_CLASS = 'dark';

const prefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const DarkModeToggle = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(() => prefersDark());

  useEffect(() => {
    document.body.classList.toggle(DARK_CLASS, isDark);
  }, [isDark]);

  return (
    <div className='dark-mode-toggle_container'>
      <button
        type='button'
        className={`dark-mode-toggle ${isDark ? 'dark' : 'light'}`}
        aria-label={t('navbar_darkmode')}
        aria-pressed={isDark}
        onClick={() => setIsDark((v) => !v)}
      />
    </div>
  );
};
