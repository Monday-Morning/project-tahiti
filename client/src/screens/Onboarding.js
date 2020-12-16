import React, { useState } from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Components
import Welcome from '../components/onboarding/stages/Welcome';

const STAGES = {
  WELCOME: 'welcome-stage',
  VERIFY_EMAIL: 'verify-email',
  INTERESTED_TOPICS: 'interested-topics',
  NEWSLETTER: 'newsletter-signup',
};

function Onboarding() {
  const classes = useStyles();
  const [stage, setStage] = useState(STAGES.WELCOME);

  const renderStages = () => {
    switch (stage) {
      case STAGES.WELCOME:
        return <Welcome />;
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
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '60%',
    height: '55%',
    backgroundColor: theme.palette.background.default,
    borderRadius: 5,
    overflow: 'hidden',
  },
}));
