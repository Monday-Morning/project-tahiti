import React, { useState } from 'react';

import { Typography, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import { PhoneOutlined } from '@mui/icons-material';

const PostHolders = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
    >
      <Typography variant='body2' className={classes.position}>
        Second year
      </Typography>
      <Typography
        variant='body2'
        style={{ marginBottom: '5px' }}
        className={classes.holderDetails}
      >
        name:abc
      </Typography>
      <Typography
        variant='body2'
        style={{ marginBottom: '5px' }}
        className={classes.holderDetails}
      >
        Roll: 121xy0000
      </Typography>
      <div className={classes.phoneDetails}>
        <PhoneOutlined className={classes.phone} />
        <Typography style={{ marginLeft: '10px' }} variant='body2'>
          999999999
        </Typography>
      </div>
    </Grid>
  );
};

export default PostHolders;

const useStyles = makeStyles((theme) => ({
  position: {
    color: theme.palette.secondary.neutral80,
    fontFamily: 'Source Sans Pro',
    fontSize: '16px',
    marginBottom: '5px',
    marginTop: '5px',

    // [theme.breakpoints.up('sm')]: {
    // fontSize: '10px',
     
    // },
  },
  holderDetails: {
    fontSize: '20px',
    color: '#000',
    // marginTop: '5px',

    // [theme.breakpoints.up('sm')]: {
    //   fontSize: '12px',
       
    //   },
  },
  phoneDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  phone: {
    fontSize: '20px',
    color: '#000',
    marginTop: '5px',
    marginBottom: '10px',
    // [theme.breakpoints.up('sm')]: {
    //   fontSize: '1px',
       
    //   },
  },
}));
