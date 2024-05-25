import i18n from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome",
      "Toggle theme": "Toggle theme",
      myPortfolio: "My portfolio",
      myName: "Gustavo Berny",
      myRole: "Software Developer",
      myLocation: "Brasil",
      myYearOld: "30 years old",
    },
  },

  pt: {
    translation: {
      Welcome: "Bem-vindo",
      "Toggle theme": "Alternar tema",
      myPortfolio: "Meu portifolio",
      myName: "Gustavo Berny",
      myRole: "Desenvolvedor de software",
      myLocation: "Brasil",
      myYearOld: "30 anos",
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
