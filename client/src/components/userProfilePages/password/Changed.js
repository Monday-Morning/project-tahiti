import { Button, Card, Input, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import passwd from '../../../assets/images/profile/passwd.png';
import greenTick from '../../../assets/images/profile/clearedGreen.png';

function Forgot() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <span>Change Password</span>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.head}>Your password has been changed successfully!</h1>
          <div className={classes.greenTickBox}>
            <img src={greenTick} alt='' />
          </div>
          <div className={classes.text}>
            Your password has been successfully changed. Don’t forget to sign in with the new one, the next time you open the MM website!
          </div>
        </div>
        <div className={classes.imageBox}>
          <img src={passwd} alt='' className={classes.img} />
        </div>
      </Card>
    </div>
  );
}

export default Forgot;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    width: '90%',
    '& h2': {
      [theme.breakpoints.down("xs")]: {
        textAlign: 'center',
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: '1rem',
    },
  },
  wrapper: {
    width: '100%',
    marginTop: '19px',
    display: 'flex',
    justifyContent: 'space-between',

    height: '542px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
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

  imageBox: {
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',

    },

  },
  img: {
    height: 'auto',
    width: '100%',
  },
}));
