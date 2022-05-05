import React from 'react';

// libararies
import { Typography, useMediaQuery } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// theme
import theme from '../../config/themes/light';

const SessionSelector = ({ activeSession, selectSessions, LIVE }) => {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <div className={classes.seasonWrapper}>
        {Desktop ? (
          <Typography variant='body1' className={classes.seasonTitle}>
            Season
          </Typography>
        ) : (
          <></>
        )}

        <select
          name='session'
          id='session'
          value={activeSession}
          onChange={(e) => selectSessions(e.target.value)}
          className={classes.drop}
        >
          {LIVE.sessions.map((session) => (
            <option
              key={session}
              value={session}
              className={classes.selectItem}
            >
              {session}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SessionSelector;

const useStyles = makeStyles(() => ({
  seasonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  seasonTitle: {
    color: theme.palette.primary.blue50,
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightLight,
    margin: '2px 10px',
  },
  drop: {
    fontSize: '20px',
    lineHeight: '28px',
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightLight,
    border: '1px solid',
    borderColor: theme.palette.primary.blue50,
    borderRadius: '4px',
    padding: '2px 16px',
    [theme.breakpoints.down('md')]: {
      padding: '1px 0px',
    },
  },
  selectItem: {
    fontSize: '20px',
    lineHeight: '28px',
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightLight,
  },
}));
