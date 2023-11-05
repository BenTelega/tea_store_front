export const i18n = {
	locales: [
		{
			code: 'en',
			iso: 'en-US',
			name: 'English',
			file: 'en.js',
			long_iso: 'usa',
		},
		{
			code: 'ru',
			iso: 'ru-RU',
			name: 'Русский',
			file: 'ru.js',
			long_iso: 'rus',
		},
		{
			code: 'it',
			iso: 'it-IT',
			name: 'Italiano',
			file: 'it.js',
			long_iso: 'ita',
		},
		{
			code: 'fr',
			iso: 'fr-FR',
			name: 'Français',
			file: 'fr.js',
			long_iso: 'fra',
		},
		{
			code: 'de',
			iso: 'de-DE',
			name: 'Germany',
			file: 'de.js',
			long_iso: 'deu',
		},
		{
			code: 'es',
			iso: 'es-ES',
			name: 'Español',
			file: 'es.js',
			long_iso: 'esp',
		},
	],
	lazy: true,
	langDir: '~/locales/',
	defaultLocale: 'en',
	detectBrowserLanguage: {
		alwaysRedirect: true,
		fallbackLocale: 'en',
		onlyOnRoot: true,
	},
};
