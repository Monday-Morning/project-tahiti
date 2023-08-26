import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Alert, Snackbar, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

//assets
import logo from '../assets/images/logo_mm.png';
// import useToggle from '../hooks/useToggle';
import Pagination from '../components/onboarding/Pagination';
import NewsletterSignup from '../components/onboarding/stages/NewsletterSignup';
import SelectTopics from '../components/onboarding/stages/SelectTopics';
import VerifyEmail from '../components/onboarding/stages/VerifyEmail';
// Components
import Welcome from '../components/onboarding/stages/Welcome';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import theme from '../config/themes/light';
// Hooks
import useInput from '../hooks/useInput';

const STAGES = {
  WELCOME: 0,
  INTERESTED_TOPICS: 1,
  NEWSLETTER: 2,
  VERIFY_EMAIL: 3,
};

function Onboarding() {
  const classes = useStyles();
  const tabletMatches = useMediaQuery(theme.breakpoints.down('md'));
  const { push, reload } = useRouter();

  // Local States
  const [stage, setStage] = useState(-1);
  const [email, setEmail] = useInput('');
  const [isEmailVerified, toggleIsEmailVerified] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [snackbarData, setSnackbarData] = useState({
    message: '',
    severity: 'success',
  });

  // Stage Change functions
  // const setStageToWelcome = () => setStage(STAGES.WELCOME);
  const setStageToInterestedTopics = () => setStage(STAGES.INTERESTED_TOPICS);
  const setStageToNewsletter = () => setStage(STAGES.NEWSLETTER);
  const setStageToVerifyEmail = () => setStage(STAGES.VERIFY_EMAIL);

  // Local Helper Functions
  const onSignIn = () => {
    setLoading(false);
    if (window.location.pathname.includes('/onboarding')) {
      push('/');
    } else {
      reload();
    }
  };
  const onSignUp = () => {
    setLoading(false);
    setStageToInterestedTopics();
  };
  const onSignUpNewsletter = () => {
    console.log('Signed up for Newsletter');
    setLoading(false);
    setStageToVerifyEmail();
  };
  const onVerifyEmail = () => {
    console.log('Email Verify Function Executed');
    setLoading(false);
    push('/');
  };

  const renderStages = () => {
    switch (stage) {
      case STAGES.WELCOME:
        return (
          <Welcome
            onSignIn={onSignIn}
            onSignUp={onSignUp}
            tabletMatches={tabletMatches}
            setSnackbarData={setSnackbarData}
            isLoading={isLoading}
            setLoading={setLoading}
          />
        );
      case STAGES.INTERESTED_TOPICS[0]:
        return (
          <SelectTopics
            onComplete={setStageToNewsletter}
            onSkip={setStageToVerifyEmail}
            tabletMatches={tabletMatches}
            setSnackbarData={setSnackbarData}
          />
        );
      case STAGES.NEWSLETTER[0]:
        return (
          <NewsletterSignup
            onComplete={onSignUpNewsletter}
            onSkip={setStageToVerifyEmail}
            tabletMatches={tabletMatches}
            setSnackbarData={setSnackbarData}
          />
        );
      case STAGES.VERIFY_EMAIL:
        return (
          <VerifyEmail
            onComplete={onVerifyEmail}
            onSkip={onSignIn}
            onBack={setStageToNewsletter}
            email={email}
            setEmail={setEmail}
            isEmailVerified={isEmailVerified}
            toggleIsEmailVerified={toggleIsEmailVerified}
            tabletMatches={tabletMatches}
            snackbarData={snackbarData}
            setSnackbarData={setSnackbarData}
            isLoading={isLoading}
            setLoading={setLoading}
          />
        );
      default:
        return <ActivityIndicator loading={true} />;
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has('stage')) {
      setStage(STAGES[params.get('stage')?.toUpperCase()]);
    } else {
      setStage(STAGES.WELCOME);
    }
    if (params.has('email')) {
      setEmail(params.get('email'));
    }
    if (params.has('isEmailLink')) {
      toggleIsEmailVerified(true);
    }
  }, []);

  return (
    <div className={classes.screen}>
      <div className={classes.box}>
        {renderStages()}
        {isLoading && (
          <div className={classes.loading}>
            <Image src={logo} alt='MM Logo' width={`100px`} height={`100px`} />
          </div>
        )}
      </div>
      <div className={classes.pagination}>
        <Pagination active={stage} stages={Object.keys(STAGES)} />
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        ClickAwayListenerProps={{ mouseEvent: false, touchEvent: false }}
        autoHideDuration={5000}
        open={snackbarData.message !== ''}
        onClose={() => setSnackbarData({ message: '', severity: 'success' })}
        key={`Snack: ${snackbarData.message} ${Date.now()} ${Math.random()}`}
      >
        <Alert
          onClose={() => setSnackbarData({ message: '', severity: 'success' })}
          severity={snackbarData.severity}
          variant='filled'
        >
          {snackbarData.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Onboarding;

const useStyles = makeStyles((theme) => ({
  screen: {
    width: '100%',
    height: '100vh',
    padding: '0 24px',
    backgroundColor: '#FDFDFD',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    minWidth: 312,
    minHeight: 468,
    width: '55%',
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[0],
    borderRadius: 5,
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
      width: '80%',
    },
  },
  loading: {
    margin: 'auto',
    height: 'fit-content',
    width: 'fit-content',
    animation: 'rotation 2s linear infinite',
  },
}));
