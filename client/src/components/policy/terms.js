/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

// libararies
import { Typography, useMediaQuery } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// theme
import theme from '../../config/themes/light';

// placeholder
import { POLICY } from '../../assets/placeholder/policy';

const LiveData = () => {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeType, setType] = useState(0);

  return (
    <>
      <div className={classes.title}>
        <Typography variant='h1'>Terms and Policies</Typography>
      </div>
      {Desktop ? (
        <div className={classes.typeWrapper}>
          {POLICY.map((policy, key) => (
            <Typography
              variant='body1'
              key={policy.type}
              style={{
                paddingBottom: '1px',
                borderBottom: activeType === key ? '2px solid #006DCC' : 'none',
                color: activeType === key ? '#222222' : '#999999',
                cursor: 'pointer',
              }}
              onClick={() => setType(key)}
            >
              {policy.type}
            </Typography>
          ))}
        </div>
      ) : (
        <div className={classes.typeWrapper}>
          {POLICY.map((policy, key) => (
            <div
              key={policy.type}
              className={classes.batch}
              onClick={() => setType(key)}
            >
              <Typography variant='body2'>{policy.type}</Typography>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginBottom: '4rem' }}>
        <Typography variant='h2'>{POLICY[activeType].type}</Typography>
        <Typography variant='body1' className={classes.bodyText}>
          {POLICY[activeType].text}
        </Typography>
        <ol style={{ listStyleType: 'decimal' }}>
          {POLICY[activeType].terms.map((term, index) => (
            <li key={(term.body, index)} className={classes.bodyItem}>
              <Typography
                variant='body1'
                className={classes.bodyText}
                style={{ fontWeight: 700 }}
              >
                {term.title}
              </Typography>
              <Typography variant='body1' className={classes.bodyText}>
                {term.subtitle}
              </Typography>
              <Typography variant='body1' className={classes.bodyText}>
                {term.body}
              </Typography>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default LiveData;

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    margin: '2rem 0rem 1rem 0rem',
    color: theme.palette.secondary.main,
  },
  typeWrapper: {
    margin: '2rem 0rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
  },
  batch: {
    backgroundColor: theme.palette.primary.blue10,
    cursor: 'pointer',
    userSelect: 'none',
    padding: '8px 3px',
    margin: '4px',
  },
  bodyItem: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    '@media (max-width:600px)': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  bodyText: {
    marginTop: '2rem',
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    [theme.breakpoints.down('lg')]: {
      marginTop: '1rem',
    },
  },
}));
