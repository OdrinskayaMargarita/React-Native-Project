import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from './index';

const resources = {
	en: {
		translation,
	},
};
i18next.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	interpolation: {
		escapeValue: false,
	},
	lng: 'en',
	resources,
});
export default i18next;
