import { createI18n } from "vue-i18n";
import en from './locales/en.json';
import da from './locales/da.json';
import sv from './locales/sv.json';

const i18n = createI18n({
    legacy: false,
    locale: (typeof localStorage !== 'undefined') ? localStorage.getItem('user-locale') || 'en' : 'en',
    fallbackLocale: 'en',
    messages : {
      en,
      da,
      sv
    },
})

export default i18n