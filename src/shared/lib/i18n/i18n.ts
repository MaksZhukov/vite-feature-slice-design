import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { enTranslations } from './translations/en';
import { ruTranslations } from './translations/ru';
import { Languages } from './types';

export const initI18n = () => {
	return i18n
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			resources: {
				[Languages.En]: {
					translations: enTranslations
				},
				[Languages.Ru]: {
					translations: ruTranslations
				}
			},
			fallbackLng: 'en',
			debug: true,
			ns: ['translations'],
			defaultNS: 'translations',
			keySeparator: false, // we use content as keys
			interpolation: {
				escapeValue: false
			}
		});
};
