import { Button, Card, Input, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import verify from '../../../assets/images/profile/verify.png';
import { PROFILEPAGES } from '../../../assets/placeholder/profile';

function CheckEmail() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <span>Verify Account</span>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.head}>One last step. Check your email.</h1>
          <div className={classes.text}>
            We’ve sent an email to <span>{PROFILEPAGES.PROFILE.INFO[2].value}</span>
            <br />
            <br />
            You need to verify your email to access certain restricted articles. If you have not
            received the verification email please check your Spam folder. You can also click on the
            resend button below to have another email sent to you
          </div>
          <Button className={classes.inputButton} variant='contained' color='primary'>
            <span>Check again and continue</span>
          </Button>
          <div className={classes.resend}>Resend Verification Email</div>

          <div className={classes.imageBox}>
            <img src={verify} alt='' className={classes.img} />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CheckEmail;

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
    width: '420px',
  },
  head: {
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
  },
  text: {
    marginTop: '30px',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,
    '& span': {
      fontFamily: 'Source Sans Pro',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      fontWeight: '700',
    },
  },

  inputButton: {
    textTransform: 'unset',
    width: '322px',
    marginTop: '45px',
    textAlign: 'center',
    height: '37px',
    marginTop: '3rem',
    '& span': {
      fontSize: '1.25rem !important',
      lineHeight: '1.75rem',
      fontFamily: 'Source Sans Pro !important',
    },
  },
  resend: {
    marginTop: '7px',
    fontSize: '1rem !important',
    lineHeight: '1.5rem',
    fontFamily: 'Source Sans Pro !important',
    color: theme.palette.secondary.neutral80,
    fontWeight: '400',
  },

  imageBox: {
    position: 'absolute',
    // zIndex: '-10',
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
