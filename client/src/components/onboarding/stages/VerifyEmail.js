import React, { useContext, useEffect, useState } from 'react';

import Image from 'next/image';

// import { useRouter } from 'next/router';
// Library
import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Assets
import verifyEmailImg from '../../../assets/images/onboarding/verifyEmail.png';
// Constants
import { ONBOARDING } from '../../../assets/placeholder/onboarding';
import { authContext } from '../../../context/AuthContextProvider';
// Components
import Button from '../../shared/button/Regular';
import Input from '../../shared/input/Regular';

function VerifyEmail({
  onComplete,
  onSkip,
  onBack,
  email,
  setEmail,
  isEmailVerified,
  toggleIsEmailVerified,
  tabletMatches,
  setSnackbarData,
  isLoading,
  setLoading,
}) {
  const classes = useStyles();

  const {
    sendEmailLink,
    isSignInWithEmailLink,
    attachNITREmail,
    checkNITREmail,
  } = useContext(authContext);

  const [isEmailLinkPage, setIsEmailLinkPage] = useState(false);

  const checkInstitueEmail = () => {
    if (!email) {
      setSnackbarData({
        message: 'Please enter your NITR email address',
        severity: 'error',
      });
      return false;
    }
    if (!RegExp(/\@nitrkl\.ac\.in$/).test(email)) {
      setSnackbarData({
        message: 'Please enter a valid NITR email address',
        severity: 'error',
      });
      return false;
    }
    return true;
  };

  const verifyInstituteEmail = async () => {
    if (!checkInstitueEmail()) return;
    setLoading(true);
    const _res = await attachNITREmail(email, window.location.href);
    console.log('attachNITREmail', _res);
    onComplete();
    setLoading(false);
  };

  const sendVerificationEmail = async () => {
    if (!checkInstitueEmail()) return;
    setLoading(true);
    const { checkNITRMail } = await checkNITREmail(email);
    if (checkNITRMail) {
      setSnackbarData({
        severity: 'error',
        message:
          'This email is already registered with us. Please login with different mail.',
      });
      setEmail('');
      setLoading(false);
      return;
    }

    await sendEmailLink(email);
    toggleIsEmailVerified(true);
    setLoading(false);
  };

  useEffect(() => {
    if (isEmailVerified && isSignInWithEmailLink(window.location.href)) {
      setIsEmailLinkPage(true);
    }
  }, []);

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

        {!isLoading && (
          <>
            <Typography className={classes.verifyContent} variant='body1'>
              {!isEmailVerified ? (
                ONBOARDING.VERIFY_EMAIL.PRIMARY.CONTENT
              ) : (
                <>
                  We have sent an email to
                  <div className={classes.email}>{email}</div>
                </>
              )}
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
          </>
        )}
      </Grid>

      {!tabletMatches && !isLoading && (
        <Grid className={classes.imgContainer} item xs={12} md={5}>
          <Image
            className={classes.img}
            src={verifyEmailImg}
            alt='Verify Email'
          />
        </Grid>
      )}

      {!isLoading && (
        <Grid className={classes.buttonContainer} item xs={12}>
          <Typography className={classes.back} variant='body1' onClick={onBack}>
            Back
          </Typography>
          <Typography
            className={classes.skip}
            variant='body1'
            onClick={isEmailVerified ? sendVerificationEmail : onSkip}
          >
            {isEmailVerified ? 'Resend Verification mail' : 'Skip'}
          </Typography>
          <Button
            containerStyles={classes.button}
            text={
              !isEmailVerified
                ? ONBOARDING.VERIFY_EMAIL.BUTTON.PRIMARY
                : isEmailLinkPage
                ? ONBOARDING.VERIFY_EMAIL.BUTTON.FINALLY
                : ONBOARDING.VERIFY_EMAIL.BUTTON.SECONDARY
            }
            onClick={
              !isEmailVerified
                ? sendVerificationEmail
                : isEmailLinkPage
                ? verifyInstituteEmail
                : () => {
                    window.open('https://mail.nitrkl.ac.in', '_blank');
                  }
            }
          />
        </Grid>
      )}
    </Grid>
  );
}

export default VerifyEmail;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '40%',
    maxHeight: '100%',
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
  email: {
    fontWeight: '700',
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
