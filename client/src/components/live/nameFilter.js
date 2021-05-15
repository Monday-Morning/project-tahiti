import React from 'react';

// libararies
import { makeStyles, Button, useMediaQuery } from '@material-ui/core';

// theme
import theme from '../../config/themes/light';

const NameFilter = ({ filterText, handleChange }) => {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <div className={classes.filterWrapper}>
        <div style={{ width: !Desktop && '50%' }}>
          <input
            type='text'
            placeholder='Filter by Student/Company name'
            className={classes.filterField}
            value={filterText}
            onChange={handleChange}
          />
        </div>
        <div className={!Desktop && classes.buttonWrapper}>
          <Button variant='outlined' color='primary' className={classes.button}>
            <span className={classes.buttonText}>Filter</span>
          </Button>
          <Button variant='outlined' color='primary' className={classes.button}>
            <span className={classes.buttonText}>Reset</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NameFilter;

const useStyles = makeStyles(() => ({
  filterWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
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
    [theme.breakpoints.down('sm')]: {
      maxWidth: '156px',
    },
  },
  buttonWrapper: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    height: '34px',
    width: '90px',
    margin: '0px 8px',
    [theme.breakpoints.down('sm')]: {
      width: '40px',
      margin: '0px 4px',
    },
  },
  buttonText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
}));
