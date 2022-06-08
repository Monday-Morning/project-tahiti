/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

// libararies
import { Typography, useMediaQuery } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// theme
import theme from '../../config/themes/light';

const CourseSelector = ({ degree, handleChange, setDegree }) => {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {Desktop ? (
        <>
          <Typography variant='h2' className={classes.title}>
            Courses
          </Typography>
          <div className={classes.radioWrapper}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div className={classes.radioButton}>
                <input
                  type='radio'
                  checked={degree === 'B.Tech'}
                  onChange={handleChange}
                  value='B.Tech'
                  className={classes.radio}
                />
              </div>
              <Typography variant='body1' className={classes.radioText}>
                B.Tech
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div className={classes.radioButton}>
                <input
                  type='radio'
                  checked={degree === 'M.Tech'}
                  onChange={handleChange}
                  value='M.Tech'
                  className={classes.radio}
                />
              </div>
              <Typography variant='body1' className={classes.radioText}>
                M.Tech
              </Typography>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.placementWrapper}>
            <div
              className={classes.switch}
              onClick={() => setDegree('B.Tech')}
              style={{
                backgroundColor: degree === 'B.Tech' ? '#006DCC' : 'unset',
                color: degree === 'B.Tech' ? 'white' : 'black',
              }}
            >
              <Typography variant='body1'> B.Tech </Typography>
            </div>
            <div
              className={classes.switch}
              onClick={() => setDegree('M.Tech')}
              style={{
                backgroundColor: degree === 'B.Tech' ? 'unset' : '#006DCC',
                color: degree === 'B.Tech' ? 'black' : 'white',
              }}
            >
              <Typography variant='body1'> M.Tech </Typography>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseSelector;

const useStyles = makeStyles(() => ({
  title: {
    margin: '2rem 0rem 1rem 0rem',
    color: theme.palette.secondary.main,
  },
  radioWrapper: {
    padding: '8px 24px',
    boxShadow: theme.shadows[0],
    borderRadius: '6px',
  },
  radioButton: {
    border: '1px solid',
    borderColor: theme.palette.primary.blue50,
    width: '16px',
    height: '16px',
    display: 'flex',
  },
  radio: {
    margin: 'auto',
    width: '8px',
    height: '8px',
    appearance: 'none',
    '&:checked': {
      backgroundColor: theme.palette.primary.blue50,
    },
  },
  radioText: {
    marginLeft: '4px',
    fontSize: '18px',
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
    padding: '2px 8px',
    cursor: 'pointer',
    width: '64px',
  },
}));
