import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';

// Assets
import logo from '../../../assets/images/logo.png';

// Constants
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

//Context
import authContext from '../../../context/auth/AuthContext';

function Welcome({ onNext, onLogin }) {
  const classes = useStyles();

  const { loginWithToken } = useContext(authContext);
  useEffect(() => {
    function handleCredentialResponse(response) {
      loginWithToken(response.credential);
      // onNext();
    }
    function gis() {
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
        theme: 'outline',
        size: 'large',
      });
      google.accounts.id.prompt();
    }
    gis();
  }, []);

  return (
    <div className={classes.container}>
      <Image
        className={classes.logo}
        width={390}
        height={68}
        src={logo}
        alt='Monday Morning'
      />

      <Typography className={classes.welcomeText} variant='body1'>
        {ONBOARDING.WELCOME.CONTENT}
      </Typography>

      <div id='buttonDiv'></div>
      <Typography className={classes.skip} variant='body1' onClick={onNext}>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    padding: 10,
  },
  logo: {
    marginTop: '48px',
  },
  welcomeText: {
    width: '330px',
    height: '56px',
    height: 'auto',
    color: theme.palette.secondary.neutral70,
    textAlign: 'center',
    marginTop: '48px',
    marginBottom: '56px',
  },
  loginButton: {
    // width: '25%',
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
