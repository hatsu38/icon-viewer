/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    localePath: './public/locales',
    ns: ['common'],
    defaultLocale: 'en',
    localeDetection: true,
    fallbackLng: {
      default: ['en'],
    },
    nonExplicitSupportedLngs: true,
  },
};
