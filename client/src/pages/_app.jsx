import React from 'react';
import Head from 'next/head';

// Styles
import '../../public/index.css';

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
