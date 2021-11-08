import React from 'react';
import Head from 'next/head';

// Libraries
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Providers
import ApolloClient from '../config/ApolloClient';

// Components
// import ScrollToTopOnMount from '../components/shared/ScrollToTopOnMount';
import ScrollToTopButton from '../components/shared/button/ScrollToTopButton';

// Theme
import lightTheme from '../config/themes/light';

function TahitiApp({ Component, pageProps }) {
  return (
    <ApolloClient>
      <Head>
        {/* <!-- =============== Standard Meta Tags =============== --> */}
        <meta charSet='utf-8' />
        <base href='/' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />

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

        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>Monday Morning</title>
        <meta name='title' content='Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content='monday morning, mondaymorning, monday morning nit rourkela, nit, nit rourkela'
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://mondaymorning.nitrkl.ac.in/' />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta property='og:title' content='Monday Morning' />
        <meta
          property='og:description'
          content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
        />
        <meta
          property='og:image'
          itemProp='image'
          content='/icon-256x256.png'
        />
        <meta
          property='og:image:url'
          content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
        />
        <meta
          property='og:image:secure_url'
          content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
        />
        <meta property='og:image:type' content='image/png' />

        {/* <!-- =============== Twitter =============== --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://mondaymorning.nitrkl.ac.in/'
        />
        <meta property='twitter:title' content='Monday Morning' />
        <meta
          property='twitter:image'
          content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
        />
        <meta
          property='twitter:description'
          content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
        />

        {/* <!-- =============== PWA Manifest =============== --> */}
        <link
          rel='manifest'
          type='application/manifest+json'
          href='/manifest.webmanifest'
        />

        {/* <!-- =============== Google Fonts + Font Aweseom =============== --> */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
          integrity='sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=='
          crossOrigin='anonymous'
          as='style'
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link rel='stylesheet' href='/index.css' />
        <noscript>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
          />
        </noscript>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        <Component {...pageProps} />

        <ScrollToTopButton />
        {/* <ScrollToTopOnMount /> */}
      </ThemeProvider>
    </ApolloClient>
  );
}

export default TahitiApp;
