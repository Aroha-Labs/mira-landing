/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script type="text/javascript" src="/js/nr.js"></script>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Mira" />
        <meta
          property="og:description"
          content="Decentralised Infrastructure to Universalise AI"
        />
        <meta property="og:image" content="/icons/icon-512x512.png" />
        <meta property="og:url" content="https://mira.network/" />
        <meta name="theme-color" content="#4F95FF" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SN9FBRTQ23"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SN9FBRTQ23');`,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
