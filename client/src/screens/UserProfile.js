import { Button, Card, Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import theme from '../config/themes/light';

import { ChevronRight } from 'react-feather';
import ProfileCard from '../components/userProfilePages/widgets/ProfileCard';
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

  const [option, setOption] = useState(0);
  const [nLOption, setNLOption] = useState(0);
  const [accOption, setAccOption] = useState(0);
  const [passwdOption, setPasswdOption] = useState(0);
  const [selectedTopics, setSelectedTopics] = useState([]);

  function handleOptionClick(value) {
    setOption(value);
    setNLOption(0);
    setAccOption(0);
    setPasswdOption(0);
  }

  const addSelectedTopic = (newTopic) =>
    setSelectedTopics([...selectedTopics, newTopic]);

  const removeSelectedTopic = (topic) =>
    setSelectedTopics((selected) => {
      return selected.filter((selectedTopic) => {
        if (selectedTopic !== topic) return selectedTopic;
      });
    });

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <BackButton path='/' goTo='Guide' />
        <Typography variant='h1' className={classes.head}>
          User Account
        </Typography>
        <div className={classes.body}>
          <div className={classes.menu}>
            <ProfileCard />
            <Card className={classes.options}>
              {options.map((option__value, key) => (
                <Button
                  className={`${key ? classes.option1 : classes.option0} 
                  ${option == key ? classes.selectedOption : ''}
                  `}
                  key={key}
                  onClick={() => handleOptionClick(key)}
                >
                  {option__value}

                  <ChevronRight size={18} />
                </Button>
              ))}
            </Card>
          </div>
          <MainBox
            className={classes.mainBox}
            option__names={options}
            option={option}
            nLOption={nLOption}
            accOption={accOption}
            passwdOption={passwdOption}
            selectedTopics={selectedTopics}
            nLState={setNLOption}
            passwdState={setPasswdOption}
            accState={setAccOption}
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
    color: theme.palette.primary.blue60,
    marginTop: '2rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginTop: '0.75rem',
    },
  },
  body: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      // display: 'none',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5rem',
    maxWidth: '276px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
    borderRadius: '6px',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
  },
  option1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.secondary.neutral70,
    width: '276px',
    height: '49px',
    borderTop: '1px solid',
    borderColor: theme.palette.secondary.neutral60,
    borderRadius: '0',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  option0: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.secondary.neutral70,
    width: '276px',
    height: '49px',
    borderRadius: '0',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  selectedOption: {
    color: `${theme.palette.secondary.main} !important`,
  },
  mainBox: {
    width: '100%',
  },
}));
