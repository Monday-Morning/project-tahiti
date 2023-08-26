import React from 'react';

import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const PostHolders = ({ position, name, email, phone }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
    >
      <Typography variant='body2' className={classes.position}>
        {position}
      </Typography>
      <Typography variant='body2' className={classes.name}>
        {name}
      </Typography>
      <Typography variant='body2' className={classes.holderDetails}>
        <strong>Email:-</strong> {email}
      </Typography>
      {phone ? (
        <div className={classes.phoneDetails}>
          <PhoneOutlined className={classes.phone} />
          <Typography className={classes.number} variant='body2'>
            {phone}
          </Typography>
        </div>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default PostHolders;

const useStyles = makeStyles((theme) => ({
  position: {
    color: theme.palette.secondary.neutral80,
    fontFamily: 'Source Sans Pro',
    fontSize: '20px',
    marginBottom: '5px',
    marginTop: '5px',
    fontWeight: '600',
  },
  holderDetails: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '20px',
    color: '#000',
    marginBottom: '5px',
  },
  name: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '20px',
    color: '#000',
    marginBottom: '5px',
    fontWeight: '600',
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
