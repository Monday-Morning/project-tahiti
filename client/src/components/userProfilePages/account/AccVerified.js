import { makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import verify from '../../../assets/images/profile/verify.png';
import greenTick from '../../../assets/images/profile/clearedGreen.png';
import ImageBox from '../widgets/ImageBox';

function AccVerified() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.head}>Great! Your account is already verified</h1>
        <div className={classes.greenTickBox}>
          <img src={greenTick} alt='' />
        </div>
        <div className={classes.text}>
          Get seamless access to all articles, including LAN-restricted ones, now on-the-go. Happy
          reading!
          </div>

      </div>
      <ImageBox widthImage="59%" img={verify} />
    </div>
  );
}

export default AccVerified;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    height: '542px',
    paddingInline: '6%',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      paddingBottom: '7%',
    },
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '52px',
    width: '47%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      textAlign: "center",
      alignItems: 'center',
    },

  },
  head: {
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

}));
