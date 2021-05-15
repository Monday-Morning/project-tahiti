/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

// libararies
import { makeStyles, Typography, useMediaQuery } from '@material-ui/core';

// theme
import theme from '../../config/themes/light';

const BranchSelector = ({ department, selectDepartment, LIVE }) => {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {Desktop ? (
        <>
          <Typography variant='h2' className={classes.title}>
            Departments
          </Typography>
          <div className={classes.branchWrapper}>
            {LIVE.departments.map((branch) => (
              <div
                key={branch}
                style={{
                  backgroundColor: department === branch ? '#006DCC' : 'unset',
                  color: department === branch ? 'white' : 'black',
                  borderRadius: '6px',
                  padding: '1px 6px',
                  cursor: 'pointer',
                }}
                onClick={() => selectDepartment(branch)}
              >
                <Typography
                  variant='body1'
                  style={{
                    fontSize: '18px',
                    lineHeight: '28px',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 400,
                  }}
                >
                  {branch}
                </Typography>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <select
            name='session'
            id='session'
            value={department}
            onChange={(e) => selectDepartment(e.target.value)}
            className={classes.drop}
          >
            {LIVE.departments.map((branch) => (
              <option
                key={branch}
                value={branch}
                className={classes.selectItem}
              >
                {branch}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
};

export default BranchSelector;

const useStyles = makeStyles(() => ({
  title: {
    margin: '2rem 0rem 1rem 0rem',
    color: theme.palette.secondary.main,
  },
  branchWrapper: {
    padding: '8px 4px',
    boxShadow: theme.shadows[0],
    borderRadius: '6px',
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
    [theme.breakpoints.down('sm')]: {
      padding: '1px 0px',
      maxWidth: '156px',
    },
  },
  selectItem: {
    fontSize: '20px',
    lineHeight: '28px',
    fontFamily: 'Source Sans Pro',
    fontWeight: theme.typography.fontWeightLight,
  },
}));
