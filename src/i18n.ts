import { createI18n } from "vue-i18n";
import type { I18n } from 'vue-i18n';

const activeLocale = (typeof localStorage !== 'undefined') ? localStorage.getItem('user-locale') || 'en' : 'en';

// Load active locale on init
let messages: Record<string, any> = {};

const loadLocaleSync = async (locale: string) => {
    if (!messages[locale]) {
        try {
            const mod = await import(`./locales/${locale}.json`);
            messages[locale] = mod.default;
        } catch {
            messages[locale] = {};
        }
    }
    return messages[locale];
};

// For SSR and immediate app startup, we need to load at least one locale synchronously
// Load EN as default
import en from './locales/en.json';
messages.en = en;

// Load active locale if different from EN
if (activeLocale !== 'en') {
    if (activeLocale === 'da') {
        import('./locales/da.json').then(mod => messages.da = mod.default);
    } else if (activeLocale === 'sv') {
        import('./locales/sv.json').then(mod => messages.sv = mod.default);
    }
}

const i18n: I18n = createI18n({
    legacy: false,
    locale: activeLocale,
    fallbackLocale: 'en',
    messages,
}) as I18n

export default i18n