/* eslint-disable @next/next/next-script-for-ga */
// pages/_document.tsx
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import newrelic from "newrelic";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps & { browserTimingHeader: any }> {
    const initialProps = await Document.getInitialProps(ctx);

    const browserTimingHeader = newrelic.getBrowserTimingHeader({
      hasToRemoveScriptWrapper: true,
    });

    return {
      ...initialProps,
      browserTimingHeader,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: (this.props as any).browserTimingHeader,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
