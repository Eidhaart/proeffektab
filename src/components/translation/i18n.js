import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "se",
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        welcome: "Home",
        services: "Services",
        contact: "Contact"
      }
    },
    se: {
      translation: {
        welcome: "Hem",
        services: "Tjänster",
        contact: "Kontakt"
      }
    }
  }
});

export default i18n;
