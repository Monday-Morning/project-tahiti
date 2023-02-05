import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
    border: 'none',
    backgroundColor: theme.palette.divider,
    height: '1.5px',
    marginLeft: '10px',
    marginTop: '25px',
    width: '100%',
  },
}));
