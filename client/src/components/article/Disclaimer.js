import React from 'react';

// libraries
import { makeStyles, Typography } from '@material-ui/core';

// placeholder
import { DISCLAIMER } from '../../assets/placeholder/article';

const Disclaimer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.disclaimerText} variant='body1'>
        <span className={classes.heading}>{DISCLAIMER.title}</span>
        {DISCLAIMER.firstpara}
        <br />
        <br /> {DISCLAIMER.secondpara}
      </Typography>
    </div>
  );
};

export default Disclaimer;

const useStyles = makeStyles(() => ({
  wrapper: {
    marginTop: '4rem',
    marginBottom: '2rem',
  },
  disclaimerText: {
    fontStyle: 'italic',
    fontWeight: '400',
    textAlign: 'justify',
  },
  heading: {
    fontWeight: '700',
  },
}));
