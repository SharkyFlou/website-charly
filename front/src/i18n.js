import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const SUPPORTED_LANGUAGES = ['en', 'fr'];
const FALLBACK_LANGUAGE = 'en';

const getLanguageFromUrl = () => {
  const language = new URLSearchParams(window.location.search).get('language');
  return SUPPORTED_LANGUAGES.includes(language) ? language : null;
};

const getDefaultBrowserLanguage = () => {
  const navigatorLang = navigator.language || '';
  const shortLang = navigatorLang.split('-')[0];
  return SUPPORTED_LANGUAGES.includes(shortLang) ? shortLang : null;
};

const setDefaultLanguageInUrl = (language) => {
  const url = new URL(window.location.href);
  url.searchParams.set('language', language);
  window.history.replaceState(null, '', url.toString());
};

const language = getLanguageFromUrl() || getDefaultBrowserLanguage() || FALLBACK_LANGUAGE;

if (!getLanguageFromUrl()) {
  setDefaultLanguageInUrl(language);
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    fr: { translation: translationFR },
  },
  lng: language,
  fallbackLng: FALLBACK_LANGUAGE,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
