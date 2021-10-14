import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

function TitleWrapper({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.titleWrapper}>
      <Typography variant='h2' className={classes.title}>
        {title}
      </Typography>
      <hr className={classes.underline} />
    </div>
  );
}

export default TitleWrapper;

const useStyles = makeStyles(() => ({
  titleWrapper: {
    display: 'flex',
    marginTop: '2rem',
  },
  title: {
    display: 'inline',
    whiteSpace: 'nowrap',
  },
  underline: {
    border: 'none',
    backgroundColor: 'black',
    height: '1.5px',
    marginLeft: '10px',
    marginTop: '25px',
    width: '100%',
  },
}));
