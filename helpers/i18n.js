
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'

import french from '/public/locales/fr/translation.json'
import english from '/public/locales/en/translation.json'

const lngDetector = new LanguageDetector()

i18n
    .use(Backend)
    .use(lngDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      preload:['en', 'fr'],
      fallbackLng: 'en',
      debug: true,
      
      backend:{
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }, 
        /** 
      resources: {
          fr: {
              translation: french
          },
          en : {
              translation: english
          }
      
    },*/
    /**
    react: {
      useSuspense: false
    },
    */
    // eslint-disable-next-line max-len
    //lng: 'fr', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    /*
     * you can use the i18n.changeLanguage function to change
     * the language manually: https://www.i18next.com/overview/api#changelanguage
     * if you're using a language detector, do not define the lng option
     */
    
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n