import { Button, Card, Input, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import passwd from '../../../assets/images/profile/passwd.png';
import { PROFILEPAGES } from '../../../assets/placeholder/profile';

function LinkSent() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography variant="h2">Change Password</Typography>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.head}>We’ve sent you a reset link</h1>
          <div className={classes.text}>
            We’ve sent a reset link on
          <br />
            <span>
              {PROFILEPAGES.PROFILE.INFO[2].value}
            </span>
            <br />
            <br />
            Please click on the link there to reset your password.
          </div>

        </div>
        <div className={classes.imageBox}>
          <img src={passwd} alt='' className={classes.img} />
        </div>
      </Card>
    </div>
  );
}

export default LinkSent;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    width: '90%',
    '& h2': {
      [theme.breakpoints.down("sm")]: {
        marginLeft: '0',
        textAlign: 'center',
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: '1rem',
    },
  },
  wrapper: {
    position: 'relative',
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
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  back: {
    position: 'absolute',
    color: theme.palette.secondary.neutral80,
    top: '15px',
    left: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '45px',
    width: '47%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  head: {
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  text: {
    marginTop: '4.5rem',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,
    '& span': {
      fontFamily: 'Source Sans Pro',
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '26px',

    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.5rem',
    },
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
    minWidth: '200px',
  },
}))