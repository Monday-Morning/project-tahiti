import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';

// Component
import Profile from './Profile';

// Placeholder
import { TEAM } from '../../assets/placeholder/about';

const Executive = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant='h1'>Executive Body</Typography>
      <div className={classes.row}>
        {TEAM.ROW.map((member, key) => (
          <Profile key={key} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Executive;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingBottom: '8px',
    padding: '24px',
  },
  row: {
    width: '100%',
    margin: '30px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
