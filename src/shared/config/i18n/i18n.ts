import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { isDev } from "shared/lib/isDev";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "ru",
    fallbackLng: "ru",
    debug: isDev,
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
