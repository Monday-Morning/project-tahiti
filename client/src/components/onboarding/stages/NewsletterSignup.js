import React, { useState } from 'react';

// Library
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Helper
import createBrowserHistory from '../../../utils/history';

// Components
import Button from '../../shared/button/Regular';
import Input from '../../shared/input/Regular';

// Assets
import newsletter from '../../../assets/images/onboarding/newsletter.png';
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

function VerifyEmail(props) {
  const classes = useStyles();

  // Local States
  const [isSigned, setIsSigned] = useState(false);

  // Props
  const { email, setEmail, signupNewsletter } = props;

  const onSignup = () => {
    setIsSigned(true);
    signupNewsletter();
  };

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid className={classes.content} item sm={12} md={12} lg={7}>
        <Typography className={classes.verifyTitle} variant='h1'>
          {ONBOARDING.NEWSLETTER.PRIMARY.TITLE}
        </Typography>

        {isSigned ? (
          <>
            <div className={classes.iconContainer}>
              <i className='far fa-check-circle fa-6x' style={{ color: '#1F9943' }} />
            </div>
            <Typography className={classes.verifyContent} variant='body1'>
              {ONBOARDING.NEWSLETTER.PRIMARY.CONTENT}
            </Typography>
          </>
        ) : (
          <>
            <Typography className={classes.verifyContent} variant='body1'>
              {ONBOARDING.NEWSLETTER.SECONDARY.CONTENT}
            </Typography>
            <Typography className={classes.emailTitle} variant='h3'>
              {ONBOARDING.NEWSLETTER.SECONDARY.TITLE}
            </Typography>
            <Input
              className={classes.emailInput}
              value={email}
              onChange={setEmail}
              placeholder={ONBOARDING.NEWSLETTER.EMAIL_PLACEHOLDER}
            />
          </>
        )}

        <Button
          text={
            isSigned ? ONBOARDING.NEWSLETTER.BUTTON.SECONDARY : ONBOARDING.NEWSLETTER.BUTTON.PRIMARY
          }
          onClick={isSigned ? () => createBrowserHistory.push('/') : onSignup}
          containerStyles={classes.button}
        />

        <Typography className={classes.note} variant='body2'>
          {ONBOARDING.NEWSLETTER.NOTE}
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
  },
  button: {
    width: '85%',
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
