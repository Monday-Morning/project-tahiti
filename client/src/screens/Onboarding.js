import React, { useState } from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Components
import Welcome from '../components/onboarding/stages/Welcome';
import VerifyEmail from '../components/onboarding/stages/VerifyEmail';
import SelectTopics from '../components/onboarding/stages/SelectTopics';
import NewsletterSignup from '../components/onboarding/stages/NewsletterSignup';

const STAGES = {
  WELCOME: 'welcome-stage',
  VERIFY_EMAIL: 'verify-email',
  INTERESTED_TOPICS: 'interested-topics',
  NEWSLETTER: 'newsletter-signup',
};

function Onboarding() {
  const classes = useStyles();
  const [stage, setStage] = useState(STAGES.NEWSLETTER);

  const renderStages = () => {
    switch (stage) {
      case STAGES.WELCOME:
        return <Welcome />;
      case STAGES.VERIFY_EMAIL:
        return <VerifyEmail />;
      case STAGES.INTERESTED_TOPICS:
        return <SelectTopics />;
      case STAGES.NEWSLETTER:
        return <NewsletterSignup />;
      default:
        <Typography variant='body1'>Loading....</Typography>;
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
    height: window.innerHeight,
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
