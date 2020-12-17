import React, { useState } from 'react';

// Library
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Hooks
import useInput from '../../../hooks/useInput';

// Assets
import newsletter from '../../../assets/images/onboarding/newsletter.png';

function VerifyEmail() {
  const classes = useStyles();
  const [email, setEmail] = useInput('');
  const [isSigned, setIsSigned] = useState(false);

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid className={classes.content} item sm={12} md={12} lg={7}>
        <Typography className={classes.verifyTitle} variant='h1'>
          Newsletter Signup
        </Typography>

        {isSigned ? (
          <>
            <div className={classes.iconContainer}>
              <i className='far fa-check-circle fa-6x' style={{ color: '#1F9943' }} />
            </div>
            <Typography className={classes.verifyContent} variant='body1'>
              You’ve successfully signed up for the newsletter. <br /> Be the first to know the
              happenings at NITR and never miss out on an issue release !
            </Typography>
          </>
        ) : (
          <>
            <Typography className={classes.verifyContent} variant='body1'>
              Sign up for the MM newsletter and get news and <br /> articles delivered straight to
              your mailbox!
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
          </>
        )}

        <div className={classes.button}>
          <Typography className={classes.buttonText} variant='body1'>
            {isSigned ? 'Get Started' : 'Signup for newsletter'}
          </Typography>
        </div>

        <Typography className={classes.note} variant='body2'>
          Note: Newsletters are sent once a week or once in a fortnight during the <br /> working
          session of the college
        </Typography>
      </Grid>

      <Grid className={classes.imgContainer} item sm={12} md={12} lg={5}>
        <img className={classes.img} src={newsletter} alt='Verify Email' />
      </Grid>
    </Grid>
  );
}

export default VerifyEmail;

const useStyles = makeStyles((theme) => ({
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
    padding: 7,
    backgroundColor: theme.palette.primary.blue50,
    display: 'flex',
    justifyContent: 'center',
    alignmentItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: theme.palette.common.white,
    fontSize: '18px',
    margin: 0,
    padding: 0,
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
  iconContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  },
}));
