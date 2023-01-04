import React from 'react';

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
      <Typography variant='body2' className={classes.holderDetails}>
        name: Anish Patro
      </Typography>
      <Typography variant='body2' className={classes.holderDetails}>
        Roll: 121CE0877
      </Typography>
      <div className={classes.phoneDetails}>
        <PhoneOutlined className={classes.phone} />
        <Typography className={classes.number} variant='body2'>
          9999999999
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
  },
  holderDetails: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '20px',
    color: '#000',
    marginBottom: '5px',
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
    marginTop: '10px',
    marginBottom: '10px',
  },
  number: {
    marginLeft: '10px',
  },
}));
