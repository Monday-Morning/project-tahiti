import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from '@mui/material';

// Assets
import logo from '../../../assets/images/logo.png';

// Constants
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

function Welcome(props) {
  const classes = useStyles();

  // Props
  const { onNext, onLogin } = props;

  // Helper Functions
  const onSignupClick = () => {
    onLogin();
    onNext();
  };

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

      <div className={classes.loginButton} onClick={onSignupClick}>
        <div className={classes.googleIcon}>
          <i className='fab fa-google fa-2x' />
        </div>
        <Typography variant='body1' className={classes.signupText}>
          Sign up with Google
        </Typography>
      </div>

      <Link href='/' passHref style={{ textDecoration: 'none' }}>
        <Typography className={classes.skip} variant='body1'>
          Skip
        </Typography>
      </Link>

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
  googleIcon: {
    background:
      'conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat',
    '-webkit-background-clip': 'text',
    'background-clip': 'text',
    color: 'transparent',
    '-webkit-text-fill-color': 'transparent',
  },
  signupText: {
    marginLeft: 20,
  },
  skip: {
    marginTop: 10,
    marginBottom: 50,
    color: theme.palette.secondary.neutral50,
  },
  terms: {
    color: theme.palette.secondary.neutral60,
  },
}));
