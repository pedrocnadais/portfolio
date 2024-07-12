"use client";

import { useEffect } from 'react';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
  en: {
   data: require('../locales/en/data.json'),
    translation: {
      title: 'Pedro Corsi Portfolio',
      description: 'Created by Pedro Corsi Nadais',
    },
  },
  /* pt: {
   data: require('../locales/pt/data.json'),
    translation: {
      title: 'Portfólio de Pedro Corsi',
      description: 'Criado por Pedro Corsi Nadais',
    },
  }, */
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default function I18nInitializer() {
  useEffect(() => {
    // Change the language
    i18n.changeLanguage('pt');
  }, []);

  return null;
}
