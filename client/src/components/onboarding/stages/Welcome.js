import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
      <img className={classes.logo} src={logo} alt='Monday Morning' />

      <Typography className={classes.welcomeText} variant='body1'>
        {ONBOARDING.WELCOME.CONTENT}
      </Typography>

      <div className={classes.loginButton} onClick={onSignupClick}>
        <i className='fab fa-google fa-2x' />

        <Typography variant='body1' className={classes.signupText}>
          Sign up with Google
        </Typography>
      </div>

      <Link to='/' style={{ textDecoration: 'none' }}>
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
    width: '45%',
    height: 'auto',
    marginBottom: 50,
    marginTop: 30,
  },
  welcomeText: {
    width: '60%',
    height: 'auto',
    color: theme.palette.secondary.neutral70,
    textAlign: 'center',
    marginBottom: 40,
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
    color: theme.palette.secondary.neutral50,
  },
  terms: {
    color: theme.palette.secondary.neutral60,
  },
}));
