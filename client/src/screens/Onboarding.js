import React, { useState } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Typography, useMediaQuery } from '@mui/material';
import theme from '../config/themes/light';

// Components
import Welcome from '../components/onboarding/stages/Welcome';
import VerifyEmail from '../components/onboarding/stages/VerifyEmail';
import SelectTopics from '../components/onboarding/stages/SelectTopics';
import NewsletterSignup from '../components/onboarding/stages/NewsletterSignup';

// Hooks
import useInput from '../hooks/useInput';
import useToggle from '../hooks/useToggle';
import Pagination from '../components/onboarding/Pagination';

const STAGES = {
  WELCOME: ['welcome-stage', 0],
  INTERESTED_TOPICS: ['interested-topics', 1],
  NEWSLETTER: ['newsletter-signup', 2],
  VERIFY_EMAIL: ['verify-email', 3],
};

function Onboarding() {
  const classes = useStyles();
  const tabletMatches = useMediaQuery(theme.breakpoints.down('md'));

  // Local States
  const [stage, setStage] = useState(STAGES.WELCOME);
  const [email, setEmail] = useInput('');
  const [isEmailVerified, toggleIsEmailVerified] = useToggle(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [newsletterEmail, setNewsletterEmail] = useInput('');

  // Stage Change functions
  // eslint-disable-next-line
  const setStageToWelcome = () => setStage(STAGES.WELCOME);
  const setStageToVerifyEmail = () => setStage(STAGES.VERIFY_EMAIL);
  const setStageToInterestedTopics = () => setStage(STAGES.INTERESTED_TOPICS);
  const setStageToNewsletter = () => setStage(STAGES.NEWSLETTER);

  // Local Helper Functions
  const onLogin = () => console.log('Login Function Executed');
  const verifyEmail = () => console.log('Email Verify Function Executed');
  const signupNewsletter = () => console.log('Signed up for Newsletter');

  const addSelectedTopic = (newTopic) =>
    setSelectedTopics((current) => [...current, newTopic]);

  const removeSelectedTopic = (topic) =>
    setSelectedTopics((selected) => {
      return selected.filter((selectedTopic) => {
        if (selectedTopic !== topic) return selectedTopic;
      });
    });

  const renderStages = () => {
    switch (stage[0]) {
      case STAGES.WELCOME[0]:
        return (
          <Welcome
            onNext={setStageToInterestedTopics}
            onLogin={onLogin}
            tabletMatches={tabletMatches}
          />
        );
      case STAGES.INTERESTED_TOPICS[0]:
        return (
          <SelectTopics
            selectedTopics={selectedTopics}
            addSelectedTopic={addSelectedTopic}
            removeSelectedTopic={removeSelectedTopic}
            onNext={setStageToNewsletter}
            tabletMatches={tabletMatches}
          />
        );
      case STAGES.NEWSLETTER[0]:
        return (
          <NewsletterSignup
            email={newsletterEmail}
            setEmail={setNewsletterEmail}
            signupNewsletter={signupNewsletter}
            onNext={setStageToVerifyEmail}
            onBack={setStageToInterestedTopics}
            tabletMatches={tabletMatches}
          />
        );
      case STAGES.VERIFY_EMAIL[0]:
        return (
          <VerifyEmail
            email={email}
            setEmail={setEmail}
            isEmailVerified={isEmailVerified}
            toggleIsEmailVerified={toggleIsEmailVerified}
            verifyEmail={verifyEmail}
            onBack={setStageToNewsletter}
            tabletMatches={tabletMatches}
          />
        );
      default:
        return <Typography variant='body1'>Loading....</Typography>;
    }
  };

  return (
    <div className={classes.screen}>
      <div className={classes.box}>{renderStages()}</div>
      <div className={classes.pagination}>
        <Pagination active={stage[1]} stages={Object.keys(STAGES)} />
      </div>
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
}));
