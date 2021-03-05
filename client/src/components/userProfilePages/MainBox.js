import React from 'react';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Interested from './Interested';
import Unverified from './newsletter/Unverified';
import Verified from './newsletter/Verified';
import Verify from './account/Verify';
import CheckEmail from './account/CheckEmail';
import AccVerified from './account/AccVerified';
import Forgot from './password/Forgot';
import LinkSent from './password/LinkSent';
import NewPasswd from './password/NewPasswd';
import Changed from './password/Changed';
import { Card, makeStyles, Typography } from '@material-ui/core';
import theme from '../../config/themes/light';

function MainBox({
  option,
  accOption,
  passwdOption,
  nLOption,
  accState,
  passwdState,
  nLState,
  selectedTopics,
  addSelectedTopic,
  removeSelectedTopic,
  option__names,
}) {
  const classes = useStyles(theme);

  const renderOption = () => {
    switch (option) {
      case 0:
        return <Profile />;

      case 1:
        return <Dashboard />;

      case 2:
        return (
          <Interested
            selectedTopics={selectedTopics}
            addSelectedTopic={addSelectedTopic}
            removeSelectedTopic={removeSelectedTopic}
          />
        );

      case 3:
        switch (nLOption) {
          case 0:
            return <Unverified nLState={nLState} />;
          case 1:
            return <Verified nLState={nLState} />;
        }

      case 4:
        switch (accOption) {
          case 0:
            return <Verify accState={accState} />;

          case 1:
            return <CheckEmail accState={accState} />;

          case 2:
            return <AccVerified accState={accState} />;
        }
      case 5:
        switch (passwdOption) {
          case 0:
            return <Forgot passwdState={passwdState} />;

          case 1:
            return <LinkSent passwdState={passwdState} />;

          case 2:
            return <NewPasswd passwdState={passwdState} />;

          case 3:
            return <Changed passwdState={passwdState} />;
        }
    }
  };
  return (
    <div className={classes.root}>
      <Typography variant='h2'>{option__names[option]}</Typography>
      <Card className={classes.wrapper}>{renderOption()}</Card>
    </div>
  );
}

export default MainBox;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'unset',
      marginTop: '1rem',
    },
    '& h2': {
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0',
        textAlign: 'center',
      },
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1rem',
    },
  },
  wrapper: {
    width: '100%',
    marginTop: '19px',
    height: '542px',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
}));
