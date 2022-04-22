import { makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import passwdImg from '../../../assets/images/profile/passwd.png';
import greenTick from '../../../assets/images/profile/clearedGreen.png';
import ImageBox from '../widgets/ImageBox';
import Image from 'next/image';

function Forgot() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.head}>
          Your password has been changed successfully!
        </h1>
        <div className={classes.greenTickBox}>
          <Image src={greenTick} alt='' />
        </div>
        <div className={classes.text}>
          Your password has been successfully changed. Don’t forget to sign in
          with the new one, the next time you open the MM website!
        </div>
      </div>
      <ImageBox widthImage='33%' img={passwdImg} />
    </div>
  );
}

export default Forgot;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: '6%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '7%',
    },
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '52px',
    width: '47%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
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
