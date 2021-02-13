import { Button, Card, Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import theme from '../config/themes/light';

import { ChevronRight } from 'react-feather';
import ProfileCard from '../components/userProfilePages/widgets/ProfileCard';
// import useToggle from '../hooks/useToggle';
import MainBox from '../components/userProfilePages/MainBox';
import BackButton from '../components/shared/button/BackButton';
function UserProfile() {
  const options = [
    'Profile',
    'Dashboard',
    'Interested Topics',
    'Newsletter',
    'Verify Account',
    'Change Password',
  ];

  const classes = useStyles(theme);

  const [option, setOption] = useState(5);
  const [nLOption, setnLOption] = useState(0);
  const [accOption, setaccOption] = useState(0);
  const [passwdOption, setpasswdOption] = useState(3);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const addSelectedTopic = (newTopic) => setSelectedTopics([...selectedTopics, newTopic]);

  const removeSelectedTopic = (topic) =>
    setSelectedTopics((selected) => {
      return selected.filter((selectedTopic) => {
        if (selectedTopic !== topic) return selectedTopic;
      });
    });

  return (
    <div className={classes.root}>
      <Container>
        <BackButton path='/' goTo='Guide' />
        <div className={classes.head}>User Account</div>
        <div className={classes.body}>
          <div className={classes.menu}>
            <ProfileCard />
            <Card className={classes.options}>
              {options.map((option, key) => (
                <Button
                  className={key ? classes.option1 : classes.option0}
                  key={key}
                  onClick={() => setOption(key)}
                >
                  {option}

                  <ChevronRight size={18} />
                </Button>
              ))}
            </Card>
          </div>
          <MainBox
            className={classes.mainBox}
            option={option}
            nLOption={nLOption}
            accOption={accOption}
            passwdOption={passwdOption}
            selectedTopics={selectedTopics}
            boxState={setOption}
            nLState={setnLOption}
            passwdState={setpasswdOption}
            accState={setaccOption}
            addSelectedTopic={addSelectedTopic}
            removeSelectedTopic={removeSelectedTopic}
          />
        </div>
      </Container>
    </div>
  );
}

export default UserProfile;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '2rem',
  },
  head: {
    fontFamily: 'IBM Plex Sans',
    color: theme.palette.primary.blue60,
    fontSize: '2rem',
    lineHeight: '3rem',
    marginTop: '2rem',
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center',
      marginTop: '0.75rem',
    },
  },
  body: {
    display: 'flex',
    marginTop: '1rem',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

  },
  options: {
    marginTop: '1.5rem',
    maxWidth: '276px',
    borderRadius: '6px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  option1: {
    width: '276px',
    height: '49px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid',
    borderColor: theme.palette.secondary.neutral60,
  },
  option0: {
    width: '276px',
    height: '49px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainBox: {
    width: '100%',
  },
}));
