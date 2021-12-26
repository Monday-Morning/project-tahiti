import React, { useState } from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Components
import Welcome from '../components/onboarding/stages/Welcome';
import VerifyEmail from '../components/onboarding/stages/VerifyEmail';
import SelectTopics from '../components/onboarding/stages/SelectTopics';
import NewsletterSignup from '../components/onboarding/stages/NewsletterSignup';

// Hooks
import useInput from '../hooks/useInput';
import useToggle from '../hooks/useToggle';

const STAGES = {
  WELCOME: 'welcome-stage',
  VERIFY_EMAIL: 'verify-email',
  INTERESTED_TOPICS: 'interested-topics',
  NEWSLETTER: 'newsletter-signup',
};

function Onboarding() {
  const classes = useStyles();

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
    switch (stage) {
      case STAGES.WELCOME:
        return <Welcome onNext={setStageToVerifyEmail} onLogin={onLogin} />;
      case STAGES.VERIFY_EMAIL:
        return (
          <VerifyEmail
            email={email}
            setEmail={setEmail}
            isEmailVerified={isEmailVerified}
            toggleIsEmailVerified={toggleIsEmailVerified}
            verifyEmail={verifyEmail}
            onNext={setStageToInterestedTopics}
          />
        );
      case STAGES.INTERESTED_TOPICS:
        return (
          <SelectTopics
            selectedTopics={selectedTopics}
            addSelectedTopic={addSelectedTopic}
            removeSelectedTopic={removeSelectedTopic}
            onNext={setStageToNewsletter}
          />
        );
      case STAGES.NEWSLETTER:
        return (
          <NewsletterSignup
            email={newsletterEmail}
            setEmail={setNewsletterEmail}
            signupNewsletter={signupNewsletter}
          />
        );
      default:
        return <Typography variant='body1'>Loading....</Typography>;
    }
  };

  return (
    <div className={classes.screen}>
      <div className={classes.box}>{renderStages()}</div>
    </div>
  );
}

export default Onboarding;

const useStyles = makeStyles((theme) => ({
  screen: {
    width: '100%',
    // height: window.innerHeight,
    height: '100vh',
    backgroundColor: '#E5E5E5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    minWidth: 350,
    minHeight: 500,
    width: '55%',
    height: '55%',
    backgroundColor: theme.palette.background.default,
    borderRadius: 5,
    overflow: 'hidden',
  },
}));
