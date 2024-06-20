const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});

module.exports = withNextra({
  // output: 'export',
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US'
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
