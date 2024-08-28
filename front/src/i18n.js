import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import queryString from 'query-string';

// Define the supported languages
const supportedLanguages = ['en', 'fr'];
const fallbackLng = 'fr';

const getLanguageFromUrl = () => {
  const parsed = queryString.parse(window.location.search);
  const language = parsed.language;
  if (supportedLanguages.includes(language)) {
    return language;
  }
  return null;
};

// Function to update the URL with the default language if needed
const setDefaultLanguageInUrl = (language) => {
  const url = new URL(window.location);
  url.searchParams.set('language', language);
  window.history.replaceState(null, '', url.toString());
};

const language = getLanguageFromUrl() || fallbackLng;

// If the language is not valid or missing, update the URL
if (!getLanguageFromUrl()) {
  setDefaultLanguageInUrl(fallbackLng);
}

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language,
    fallbackLng: fallbackLng,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
