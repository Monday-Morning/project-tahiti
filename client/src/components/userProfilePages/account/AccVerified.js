import { Card, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import verify from '../../../assets/images/profile/verify.png';
import greenTick from '../../../assets/images/profile/clearedGreen.png';

function AccVerified() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <span>Verify Account</span>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.head}>Great! Your account is already verified</h1>
          <div className={classes.greenTickBox}>
            <img src={greenTick} alt='' />
          </div>
          <div className={classes.text}>
            Get seamless access to all articles, including LAN-restricted ones, now on-the-go. Happy
            reading!
          </div>

          <div className={classes.imageBox}>
            <img src={verify} alt='' className={classes.img} />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AccVerified;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    '& span': {
      fontFamily: 'IBM Sans Pro',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: '600',
    },
  },
  wrapper: {
    marginTop: '19px',
    height: '542px',
    display: 'flex',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
    position: 'relative',
    width: '892px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '52px',
    marginLeft: '45px',
    width: '419px',
  },
  head: {
    fontSize: '2rem',
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
  },
  greenTickBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '43px',
  },
  text: {
    marginTop: '43px',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,
  },

  imageBox: {
    position: 'absolute',
    right: '-45px',
    top: '112px',
    marginLeft: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3rem',
  },
  img: {
    height: '276px',
    width: '367px',
  },
}));
