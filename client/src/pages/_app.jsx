import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// import Router from 'next/router';

// Styles
import '../../public/index.css';

// Libraries
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Components
// import ScrollToTopOnMount from '../components/shared/ScrollToTopOnMount';
import ScrollToTopButton from '../components/shared/button/ScrollToTopButton';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import SidebarContextProvider from '../context/SidebarContextProvider';
// Theme
import lightTheme from '../config/themes/light';
import { useRouter } from 'next/router';
// import { BrowserRouter } from 'react-router-dom';
import ApolloContextProvider from '../context/ApolloContextProvider';
import AuthContextProvider from '../context/AuthContextProvider';

function TahitiApp({ Component, pageProps }) {
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AuthContextProvider>
      <ApolloContextProvider>
        <SidebarContextProvider>
          <Head>
            {/* <!-- =============== Standard Meta Tags =============== --> */}
            <meta charSet='utf-8' />
            <base href='/' />
            <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
          </Head>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />

              {loading ? (
                <ActivityIndicator loading={loading} />
              ) : (
                <Component {...pageProps} />
              )}

              <ScrollToTopButton className={classes.fab} />
              {/* <ScrollToTopOnMount /> */}
            </ThemeProvider>
          </StyledEngineProvider>
        </SidebarContextProvider>
      </ApolloContextProvider>
    </AuthContextProvider>
  );
}

export default TahitiApp;

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    boxShadow: `0px 0px 10px #5a5a5a`,
  },
}));
