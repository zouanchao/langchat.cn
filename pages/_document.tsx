import { Head, Html, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';

const Document = () => {
  return (
    <Html dir="ltr" lang="en-US">
      <Head />
      <body>
        <SkipNavLink styled />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
