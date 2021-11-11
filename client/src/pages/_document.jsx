import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class TahitiDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <!-- =============== Icons ===============--> */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/x-icon'
            sizes='48x48'
            href='/favicon.ico'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />

          {/* <!-- =============== PWA Manifest =============== --> */}
          <link
            rel='manifest'
            type='application/manifest+json'
            href='/manifest.webmanifest'
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

export default TahitiDocument;
