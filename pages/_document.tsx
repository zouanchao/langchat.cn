import { Head, Html, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';

const Document = () => {
  return (
    <Html dir="ltr" lang="en">
      <Head />
      <body>
        <SkipNavLink styled />
        <div className="header-bg" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
