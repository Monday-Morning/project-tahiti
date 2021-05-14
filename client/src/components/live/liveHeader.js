/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// placeholder
import { LIVE } from '../../assets/placeholder/live';

const LiveHeader = () => {
  const classes = useStyles();
  const [activeSession, setSession] = useState(LIVE.sessions[0]);
  const [placement, setPlacement] = useState(false);
  const [filterText, setFilter] = useState('');

  const selectSessions = (season) => {
    setSession(season);
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <Typography variant='h2' className={classes.title}>
        Live
      </Typography>
      <div className={classes.HeadWrapper}>
        <div className={classes.seasonWrapper}>
          <Typography variant='body1' className={classes.seasonTitle}>
            Season
          </Typography>
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
        <div className={classes.placementWrapper}>
          <div
            className={classes.switch}
            onClick={() => setPlacement(true)}
            style={{
              backgroundColor: placement ? '#006DCC' : 'unset',
              color: placement ? 'white' : 'black',
            }}
          >
            <Typography variant='body1' className={classes.selectItem}>
              {' '}
              Placements{' '}
            </Typography>
          </div>
          <div
            className={classes.switch}
            onClick={() => setPlacement(false)}
            style={{
              backgroundColor: placement ? 'unset' : '#006DCC',
              color: placement ? 'black' : 'white',
            }}
          >
            <Typography variant='body1' className={classes.selectItem}>
              {' '}
              Internships{' '}
            </Typography>
          </div>
        </div>
        <div className={classes.filterWrapper}>
          <input
            type='text'
            placeholder='Filter by Student/Company name'
            className={classes.filterField}
            value={filterText}
            onChange={handleChange}
          />
          <Button variant='outlined' color='primary' className={classes.button}>
            Filter
          </Button>
          <Button variant='outlined' color='primary' className={classes.button}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default LiveHeader;

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '2rem',
    color: theme.palette.secondary.main,
  },
  HeadWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
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
  },
  selectItem: {
    fontSize: '20px',
    lineHeight: '28px',
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightLight,
  },
  placementWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    borderColor: theme.palette.primary.blue50,
    borderRadius: '4px',
  },
  switch: {
    padding: '2px 18px',
    cursor: 'pointer',
  },
  filterWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  filterField: {
    width: '300px',
    fontSize: '18px',
    lineHeight: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightLight,
    border: '1px solid',
    borderColor: theme.palette.primary.blue50,
    borderRadius: '4px',
    padding: '4px 16px',
    marginRight: '8px',
  },
  button: {
    height: '34px',
    width: '90px',
    margin: '0px 8px',
  },
}));
