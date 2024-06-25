import type { DocsThemeConfig } from 'nextra-theme-docs';

import { LocaleSwitch, ThemeSwitch, useConfig } from 'nextra-theme-docs';
import React from 'react';
import { useRouter } from 'next/router';

import { badge } from '@components/elements';

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
      <img alt="logo" className="w-10" src="/logo.png" />
      <b className="ml-1.5 hidden text-sm font-semibold sm:block sm:text-base">
        LangChat
      </b>
      <span className={badge({ class: 'hidden sm:flex' })}>By TyCoding</span>
    </div>
  ),
  head: function useHead() {
    const config = useConfig();
    const description = config.frontMatter.description || 'LangChat Docs';
    const image = config.frontMatter.image;

    return (
      <>
        {/* Favicons, meta */}
        <link href="/logo.png" rel="icon" />
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
  search: {
    placeholder: 'Search Document...'
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
