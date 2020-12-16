import React from 'react';

// Library
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Hooks
import useInput from '../../../hooks/useInput';

// Assets
import verifyEmailImg from '../../../assets/images/onboarding/verifyEmail.png';
import theme from '../../../config/themes/light';

function VerifyEmail() {
  const classes = useStyles();
  const [email, setEmail] = useInput('');

  console.log(email);

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid className={classes.content} item lg={6}>
        <Typography className={classes.verifyTitle} variant='h1'>
          Verify Account
        </Typography>

        <Typography className={classes.verifyContent} variant='body1'>
          Verify your account with insti email id <br /> just once and get access to LAN-restricted{' '}
          <br />
          articles !
        </Typography>

        <Typography className={classes.emailTitle} variant='h3'>
          Email
        </Typography>

        <input
          className={classes.emailInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='your@email.com'
        />

        <div className={classes.button}>
          <Typography className={classes.buttonText} variant='body1'>
            Get Verification Link
          </Typography>
        </div>

        <Typography className={classes.note} variant='body2'>
          Note: This only works if you’re a current student of <br /> NIT Rourkela with a valid
          insti email id.
        </Typography>
      </Grid>

      <Grid className={classes.imgContainer} item lg={5}>
        <img className={classes.img} src={verifyEmailImg} alt='Verify Email' />
      </Grid>
    </Grid>
  );
}

export default VerifyEmail;

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    padding: 10,
    paddingLeft: 40,
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  verifyTitle: {
    color: theme.palette.common.black,
    marginTop: 20,
  },
  verifyContent: {
    color: theme.palette.common.black,
    marginBottom: 30,
    fontWeight: '400',
    fontSize: '18px',
  },
  emailInput: {
    width: '85%',
    padding: 10,
    backgroundColor: theme.palette.secondary.neutral30,
    borderRadius: 5,
    margin: 10,
    marginLeft: 0,
    color: theme.palette.text.disabled,
    fontSize: '18px',
    border: '0px',
  },
  button: {
    width: '85%',
    padding: 10,
    backgroundColor: theme.palette.primary.blue50,
    display: 'flex',
    justifyContent: 'center',
    alignmentItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: theme.palette.common.white,
    fontSize: '18px',
  },
  imgContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '150%',
    height: 'auto',
    marginRight: 10,
  },
  note: {
    marginTop: 40,
    color: theme.palette.common.black,
  },
}));
