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

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: 'flex',
    marginTop: '2rem',
  },
  title: {
    display: 'inline',
    whiteSpace: 'nowrap',
  },
  underline: {
    borderBottom: '1px solid black',
    marginLeft: '20px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
}));
