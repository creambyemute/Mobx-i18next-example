import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import en from "./translationfiles/en.json";

export const supportedLanguages = { en };

// TODO: Put common actions/used labels into a common section in translations

// creating a language detection plugin, used for the first launch of the app.
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: "languageDetector",
  async: true, // async detection
  detect: (callback: any) => {
    callback("en");
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    // is Dev/Debug
    debug: true,

    // Fallback Language
    fallbackLng: "de",

    // have a common namespace used around the full app
    ns: ["i18n"],
    defaultNS: "i18n",

    // Translations
    resources: {
      en
    },

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false // not needed for react as it does escape per default to prevent xss!
    },
    react: {
      wait: true
    }
  });
export default i18n;
