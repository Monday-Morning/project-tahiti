import { Button, Card, Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import theme from '../config/themes/light';

import { ChevronLeft, ChevronRight } from 'react-feather';
import ProfileCard from '../components/userProfilePages/widgets/ProfileCard';
import useToggle from '../hooks/useToggle';
import MainBox from '../components/userProfilePages/MainBox';

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
  const [optionState, toggleOptionState] = useToggle(false);

  const [option, setOption] = useState('profile');

  return (
    <div className={classes.root}>
      <Container>
        <Button className={classes.backButton}>
          <ChevronLeft size={18} className={classes.backIcon} />
          Back to Guide
        </Button>
        <div className={classes.head}>User Account</div>
        <div className={classes.body}>
          <div className={classes.menu}>
            <div className={classes.profileCardBox}>
              <ProfileCard />
            </div>
            <Card className={classes.options}>
              {options.map((option, key) => (
                <Button className={key ? classes.option1 : classes.option0} key={key}>
                  {option}

                  <ChevronRight size={18} className={classes.rightIcon} />
                </Button>
              ))}
            </Card>
          </div>
          <MainBox option={5} nLOption={0} accOption={0} passwdOption={3} />

        </div>
      </Container>
    </div>
  );
}

export default UserProfile;

const useStyles = makeStyles((theme) => ({
  root: {
  },

  backButton: {
    textTransform: 'unset',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.25rem',
    padding: '5px',
    marginTop: '47.5px',
    fontWeight: '400',
    color: theme.palette.secondary.neutral80,
  },
  backIcon: {
    marginRight: '21px',
  },
  head: {
    fontFamily: 'IBM Plex Sans',
    color: theme.palette.primary.blue60,
    fontSize: '2rem',
    lineHeight: '3rem',
    marginTop: '2rem',
  },
  body: {
    display: 'flex',
    marginTop: '1rem',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
  },
  profileCardBox: {},
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
  rightIcon: {},

  content: {},
}));
