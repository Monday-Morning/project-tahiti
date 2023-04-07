import React, { useState, useContext } from 'react';
// import { useRouter } from 'next/router';
import Image from 'next/image';

// Library
import { Typography, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Helper
// import createBrowserHistory from '../../../utils/history';

// Components
import Button from '../../shared/button/Regular';

// Assets
import newsletter from '../../../assets/images/onboarding/newsletter.png';
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

//graphql
import newsLetterSubscription from '../../../graphql/mutations/user/newsLetterSubscription';

//context
import { authContext } from '../../../context/AuthContextProvider';
import { apolloContext } from '../../../context/ApolloContextProvider';

function NewsletterSignup({ onComplete, onSkip, tabletMatches }) {
  const classes = useStyles();
  // const router = useRouter();
  const graphClient = useContext(apolloContext);

  // Local States
  const [isSigned, setIsSigned] = useState(false);

  const {
    user: { mid },
  } = useContext(authContext);

  const onSignup = async () => {
    setIsSigned(true);

    await graphClient.mutate({
      mutation: newsLetterSubscription,
      variables: {
        userId: mid,
        flag: true,
      },
    });
  };

  return (
    <Grid
      className={classes.container}
      container
      spacing={tabletMatches ? 0 : 3}
    >
      <Grid className={classes.content} item xs={12} md={7}>
        <Typography className={classes.verifyTitle} variant='h1'>
          {ONBOARDING.NEWSLETTER.PRIMARY.TITLE}
        </Typography>

        {isSigned ? (
          <>
            <div className={classes.iconContainer}>
              <i className={`far fa-check-circle fa-6x ${classes.icon}`} />
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
            {tabletMatches && (
              <Grid className={classes.mobileImgContainer} item xs={12}>
                <Image
                  className={classes.img}
                  src={newsletter}
                  alt='Verify Email'
                />
              </Grid>
            )}
          </>
        )}

        <Typography className={classes.note} variant='body2'>
          {ONBOARDING.NEWSLETTER.NOTE}
        </Typography>
      </Grid>

      {!tabletMatches && (
        <Grid className={classes.imgContainer} item xs={12} md={5}>
          <Image className={classes.img} src={newsletter} alt='Verify Email' />
        </Grid>
      )}

      <Grid className={classes.buttonContainer} item xs={12}>
        {!isSigned && (
          <>
            <Typography
              className={classes.back}
              variant='body1'
              onClick={onSkip}
            >
              Skip
            </Typography>
          </>
        )}
        <Button
          text={
            isSigned
              ? ONBOARDING.NEWSLETTER.BUTTON.SECONDARY
              : tabletMatches
              ? ONBOARDING.NEWSLETTER.BUTTON.MOBILE
              : ONBOARDING.NEWSLETTER.BUTTON.PRIMARY
          }
          onClick={isSigned ? onComplete : onSignup}
          containerStyles={classes.button}
        />
      </Grid>
    </Grid>
  );
}

export default NewsletterSignup;

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
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 24,
  },
  button: {
    flex: '0 1 0',
    padding: '10px 20px',
    whiteSpace: 'nowrap',
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
  iconContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto',
  },
  icon: {
    color: theme.palette.accent.green,
  },
  back: {
    marginRight: 'auto',
    cursor: 'pointer',
    color: theme.palette.secondary.neutral50,
  },
}));
