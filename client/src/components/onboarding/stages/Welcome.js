import React, { useEffect, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';

// Assets
import logo from '../../../assets/images/logo.png';

// Constants
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

//Context
import { authContext } from '../../../context/AuthContextProvider';

function Welcome({
  onSignIn,
  onSignUp,
  tabletMatches,
  setSnackbarData,
  isLoading,
  setLoading,
}) {
  const classes = useStyles();
  const { push } = useRouter();

  const { loginWithToken } = useContext(authContext);
  useEffect(() => {
    async function handleCredentialResponse(response) {
      setLoading(true);

      const _loginResponse = await loginWithToken(response.credential);
      if (!_loginResponse) {
        setSnackbarData({
          message: 'Something went wrong. Please try again.',
          severity: 'error',
        });
        setLoading(false);
        return;
      }
      if (_loginResponse.error) {
        console.error(_loginResponse.error);
        setSnackbarData({
          message: `Oops! Your sign ${
            _loginResponse.isNewUser ? 'up' : 'in'
          } failed. Please try again.`,
          severity: 'error',
        });
        setLoading(false);
        return;
      }
      if (_loginResponse.isNewUser && !_loginResponse.isMigratedUser) {
        onSignUp();
      } else {
        onSignIn();
      }
    }

    function gis() {
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById('googleAccountSignInDiv'),
        {
          theme: 'outline',
          size: 'large',
        },
      );
      google.accounts.id.prompt();
    }
    gis();
  }, []);

  if (isLoading) {
    return (
      <div className={classes.container}>
        <Image
          className={classes.logo}
          width={tabletMatches ? 232 : 390}
          height={tabletMatches ? 40 : 68}
          src={logo}
          alt='Monday Morning'
        />
        <Typography className={classes.welcomeText} variant='body1'>
          {ONBOARDING.WELCOME.CONTENT}
        </Typography>
        <Typography className={classes.welcomeText} variant='body1'>
          Loading...
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Image
        className={classes.logo}
        width={tabletMatches ? 232 : 390}
        height={tabletMatches ? 40 : 68}
        src={logo}
        alt='Monday Morning'
      />

      <Typography className={classes.welcomeText} variant='body1'>
        {ONBOARDING.WELCOME.CONTENT}
      </Typography>

      <div id='googleAccountSignInDiv'></div>
      <Typography
        className={classes.skip}
        variant='body1'
        onClick={() => push('/')}
      >
        Skip
      </Typography>
      <Typography className={classes.terms} variant='body2'>
        {ONBOARDING.WELCOME.TERMS}
      </Typography>
    </div>
  );
}

export default Welcome;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '32px 12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
  },
  logo: {
    marginTop: '48px',
  },
  welcomeText: {
    maxWidth: '330px',
    height: 'auto',
    color: theme.palette.secondary.neutral70,
    textAlign: 'center',
    marginTop: '48px',
    marginBottom: '56px',
  },
  loginButton: {
    height: 'auto',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: 5,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  signupText: {
    marginLeft: 20,
  },
  skip: {
    marginTop: 10,
    marginBottom: 50,
    cursor: 'pointer',
    color: theme.palette.secondary.neutral50,
  },
  terms: {
    color: theme.palette.secondary.neutral60,
  },
}));
