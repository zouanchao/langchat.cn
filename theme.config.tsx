import type { DocsThemeConfig } from 'nextra-theme-docs';

import { useConfig } from 'nextra-theme-docs';
import React from 'react';
import { useRouter } from 'next/router';

import { Logo } from '@components';
import { Footer } from '@components/layout/footer';

const config: DocsThemeConfig = {
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  },
  logo: (
    <div className="flex items-center">
      <Logo height={30} />
      <b className="ml-1.5 hidden text-sm font-semibold sm:block sm:text-base">
        Tailwind Variants
      </b>
    </div>
  ),
  head: function useHead() {
    const config = useConfig();
    const description =
      config.frontMatter.description ||
      'The power of Tailwind combined with a first-class variant API.';
    const image =
      config.frontMatter.image || 'https://tailwind-variants.org/banner.png';

    // || "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg";

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
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@nextui-org" name="twitter:site" />
        <meta content={image} name="twitter:image" />
        <meta content={`${config.title} – tailwind-variants`} name="og:title" />
        <meta content={image} name="og:image" />
        <meta content="tailwind-variants" name="apple-mobile-web-app-title" />
      </>
    );
  },
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle || 'Tailwind Variants';

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: router.pathname !== '/' ? `%s – ${defaultTitle}` : ''
    };
  },
  project: {
    link: 'https://github.com/nextui-org/tailwind-variants'
  },
  chat: {
    link: 'https://discord.gg/9b6yyZKmH4'
  },
  docsRepositoryBase:
    'https://github.com/nextui-org/tailwind-variants-docs/blob/main',
  gitTimestamp: '',
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    component: <Footer />
  }
};

export default config;
