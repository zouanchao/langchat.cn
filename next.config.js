const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});

module.exports = withNextra({
  output: 'standalone',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh'
  },
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: false
      }
    ];
  }
});
