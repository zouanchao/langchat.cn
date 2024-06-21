import type { DocsThemeConfig } from 'nextra-theme-docs';

import { LocaleSwitch, ThemeSwitch, useConfig } from 'nextra-theme-docs';
import React from 'react';
import { useRouter } from 'next/router';

import { Logo, tvs } from '@components';

const config: DocsThemeConfig = {
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' }
  ],
  logo: (
    <div className="flex items-center">
      <Logo height={30} />
      <b className="ml-1.5 hidden text-sm font-semibold sm:block sm:text-base">
        LangChat
      </b>
      <span className={tvs.badge({ class: 'hidden sm:flex' })}>
        By TyCoding
      </span>
    </div>
  ),
  head: function useHead() {
    const config = useConfig();
    const description =
      config.frontMatter.description ||
      'The power of Tailwind combined with a first-class variant API.';
    const image =
      config.frontMatter.image || 'https://tailwind-variants.org/banner.png';

    return (
      <>
        {/* Favicons, meta */}
        <link
          href="/favicon/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link
          color="#000000"
          href="/favicon/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content={description} name="description" />
        <meta content={description} name="og:description" />
        <meta content={`${config.title} – langchat`} name="og:title" />
        <meta content={image} name="og:image" />
        <meta content="langchat" name="apple-mobile-web-app-title" />
      </>
    );
  },
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle || 'LangChat';

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: router.pathname !== '/' ? `%s – ${defaultTitle}` : ''
    };
  },
  project: {
    link: 'https://github.com/tycoding/langchat'
  },
  docsRepositoryBase: 'https://github.com/tycoding/langchat.cn',
  gitTimestamp: '',
  navbar: {
    extraContent: (
      <>
        <LocaleSwitch />
        <ThemeSwitch />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    component: null
  }
};

export default config;
