import React, { useState } from 'react';
import Image from 'next/image';

// Library
import { Typography, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Assets
import verifyEmailImg from '../../../assets/images/onboarding/verifyEmail.png';

// Components
import Button from '../../shared/button/Regular';
import Input from '../../shared/input/Regular';

// Constants
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

function VerifyEmail(props) {
  const classes = useStyles();

  // props
  const {
    email,
    setEmail,
    isEmailVerified,
    toggleIsEmailVerified,
    verifyEmail,
    onNext,
    onBack,
    tabletMatches,
  } = props;

  return (
    <Grid
      className={classes.container}
      container
      spacing={tabletMatches ? 0 : 3}
    >
      <Grid className={classes.content} item sm={12} md={7}>
        <Typography className={classes.verifyTitle} variant='h1'>
          {ONBOARDING.VERIFY_EMAIL.PRIMARY.TITLE}
        </Typography>

        <Typography className={classes.verifyContent} variant='body1'>
          {!isEmailVerified
            ? ONBOARDING.VERIFY_EMAIL.PRIMARY.CONTENT
            : `We have sent an email to ${email}`}
        </Typography>

        {tabletMatches && (
          <Grid className={classes.mobileImgContainer} item xs={12}>
            <Image
              className={classes.img}
              src={verifyEmailImg}
              alt='Verify Email'
            />
          </Grid>
        )}

        {isEmailVerified ? (
          <Typography className={classes.verifyContent} variant='body1'>
            {ONBOARDING.VERIFY_EMAIL.SECONDARY.CONTENT}
          </Typography>
        ) : (
          <>
            <Typography className={classes.emailTitle} variant='h3'>
              {ONBOARDING.VERIFY_EMAIL.SECONDARY.TITLE}
            </Typography>
            <Input
              className={classes.emailInput}
              value={email}
              onChange={setEmail}
              placeholder={ONBOARDING.VERIFY_EMAIL.EMAIL_PLACEHOLDER}
            />
          </>
        )}

        {!isEmailVerified && (
          <Typography className={classes.note} variant='body2'>
            {ONBOARDING.VERIFY_EMAIL.NOTE}
          </Typography>
        )}
      </Grid>

      {!tabletMatches && (
        <Grid className={classes.imgContainer} item xs={12} md={5}>
          <Image
            className={classes.img}
            src={verifyEmailImg}
            alt='Verify Email'
          />
        </Grid>
      )}

      <Grid className={classes.buttonContainer} item xs={12}>
        <Typography className={classes.back} variant='body1' onClick={onBack}>
          Back
        </Typography>
        <Typography className={classes.skip} variant='body1' onClick={onNext}>
          {isEmailVerified ? 'Resend Verification mail' : 'Skip'}
        </Typography>
        <Button
          containerStyles={classes.button}
          text={
            tabletMatches
              ? ONBOARDING.NEWSLETTER.BUTTON.MOBILE
              : isEmailVerified
              ? ONBOARDING.NEWSLETTER.BUTTON.SECONDARY
              : ONBOARDING.NEWSLETTER.BUTTON.PRIMARY
          }
          onClick={
            !isEmailVerified
              ? () => {
                  verifyEmail();
                  toggleIsEmailVerified();
                }
              : onNext
          }
        />
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
    [theme.breakpoints.down('sm')]: {
      padding: '24px 12px 12px',
    },
  },
  content: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  verifyTitle: {
    color: theme.palette.common.black,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      width: '100%',
    },
  },
  verifyContent: {
    color: theme.palette.secondary.neutral60,
    marginBottom: 30,
    fontWeight: '400',
    fontSize: '16px',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontSize: '14px',
    },
  },
  emailInput: {
    width: '85%',
    borderRadius: '20px',
    paddingLeft: '20px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 24,
  },
  button: {
    whiteSpace: 'nowrap',
    flex: '0 1 0',
    padding: '10px 20px',
  },
  imgContainer: {
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileImgContainer: {
    width: '55%',
    margin: '0 auto 24px',
  },
  note: {
    marginTop: 24,
    color: theme.palette.common.neutral50,
  },
  skip: {
    cursor: 'pointer',
    color: theme.palette.secondary.neutral50,
  },
  back: {
    marginRight: 'auto',
    cursor: 'pointer',
    color: theme.palette.secondary.neutral50,
  },
}));
