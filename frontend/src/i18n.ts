import i18n from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome",
      "Toggle theme": "Toggle theme",
    },
  },

  pt: {
    translation: {
      Welcome: "Bem-vindo",
      "Toggle theme": "Alternar tema",
    },
  },
};

i18n

  .use(initReactI18next)

  .init({
    resources,

    lng: "en", // default language

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
