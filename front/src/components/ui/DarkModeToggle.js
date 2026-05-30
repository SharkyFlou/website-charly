import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './DarkModeToggle.css';

const DARK_CLASS = 'dark';
const STORAGE_KEY = 'theme';

const prefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

const getInitialDark = () => {
  if (typeof window === 'undefined') return false;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark') return true;
  if (stored === 'light') return false;
  return prefersDark();
};

export const DarkModeToggle = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    document.body.classList.toggle(DARK_CLASS, isDark);
    window.localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
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
