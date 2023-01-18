// Styles
import '../../public/index.css';

import React, {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

// import { BrowserRouter } from 'react-router-dom';
// Libraries
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

// Components
// import ScrollToTopOnMount from '../components/shared/ScrollToTopOnMount';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import ScrollToTopButton from '../components/shared/button/ScrollToTopButton';
// Providers
import ApolloClient from '../config/ApolloClient';
import AuthState from '../context/auth/AuthState';
import SidebarContextProvider from '../context/SidebarContext';
import ThemeContextProvider from '../context/ThemeContext';

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
    <AuthState>
      <ApolloClient>
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
            <ThemeContextProvider>
              <CssBaseline />

              {loading ? (
                <ActivityIndicator loading={loading} />
              ) : (
                <Component {...pageProps} />
              )}

              <ScrollToTopButton className={classes.fab} />
              {/* <ScrollToTopOnMount /> */}
            </ThemeContextProvider>
          </StyledEngineProvider>
        </SidebarContextProvider>
      </ApolloClient>
    </AuthState>
  );
}

export default TahitiApp;

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    boxShadow: `0px 0px 10px #5a5a5a`,
  },
}));
