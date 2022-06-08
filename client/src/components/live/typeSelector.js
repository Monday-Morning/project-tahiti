/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

// libararies
import { Typography, useMediaQuery } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// theme
import theme from '../../config/themes/light';

const TypeSelector = ({ placement, setPlacement }) => {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <div className={classes.placementWrapper}>
        <div
          className={classes.switch}
          onClick={() => setPlacement(true)}
          style={{
            backgroundColor: placement ? '#006DCC' : 'unset',
            color: placement ? 'white' : 'black',
          }}
        >
          <Typography variant='body1' className={Desktop && classes.selectItem}>
            {Desktop ? 'Placements' : 'FTEs'}
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
          <Typography variant='body1' className={Desktop && classes.selectItem}>
            {Desktop ? 'Internships' : 'Interns'}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default TypeSelector;

const useStyles = makeStyles(() => ({
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
    [theme.breakpoints.down('md')]: {
      padding: '2px 8px',
      width: '64px',
    },
  },
}));
