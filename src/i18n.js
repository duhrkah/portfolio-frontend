import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: {
    translation: {
      welcome: 'Willkommen',
      about: 'Über mich',
      projects: 'Projekte',
      contact: 'Kontakt',
      // Fügen Sie hier weitere Übersetzungen hinzu
    }
  },
  en: {
    translation: {
      welcome: 'Welcome',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      // Fügen Sie hier weitere Übersetzungen hinzu
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 