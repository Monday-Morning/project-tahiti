import { Button, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import { ChevronRight, User } from 'react-feather';
import theme from '../../../config/themes/light';

function Options() {
  const classes = useStyles(theme);
  const options = [
    'Profile',
    'Dashboard',
    'Interested Topics',
    'Newsletter',
    'Verify Account',
    'Change Password',
  ];

  return (
    <Card className={classes.root}>
      {options.map((option, key) => (
        <Button className={key ? classes.option1 : classes.option0} key={key}>
          {option}

          <ChevronRight size={18} className={classes.rightIcon} />
        </Button>
      ))}

    </Card>
  );
}

export default Options;

const useStyles = makeStyles((theme) => ({
  root: {
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
}));
