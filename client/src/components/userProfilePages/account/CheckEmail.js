import { Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import theme from '../../../config/themes/light';
import verify from '../../../assets/images/profile/verify.png';
import { PROFILEPAGES } from '../../../assets/placeholder/profile';
import ImageBox from '../widgets/ImageBox';

function CheckEmail(props) {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.head}>One last step. Check your email.</h1>
        <div className={classes.text}>
          We’ve sent an email to{' '}
          <span>{PROFILEPAGES.PROFILE.INFO[2].value}</span>
          <br />
          <br />
          You need to verify your email to access certain restricted articles.
          If you have not received the verification email please check your Spam
          folder. You can also click on the resend button below to have another
          email sent to you
        </div>
        <Button
          className={classes.inputButton}
          variant='contained'
          color='primary'
          onClick={() => props.accState(2)}
        >
          <span>Check again and continue</span>
        </Button>
        <div className={classes.resend}>Resend Verification Email</div>
      </div>
      <ImageBox widthImage='59%' img={verify} />
    </div>
  );
}

export default CheckEmail;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    paddingInline: '6%',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '7%',
    },
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '52px',
    width: '47%',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      alignItems: 'center',
    },
  },
  head: {
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
  },
  text: {
    marginTop: '10px',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,
  },
  inputButton: {
    textTransform: 'unset',
    width: '90%',
    whiteSpace: 'nowrap',
    // marginTop: '45px',
    textAlign: 'center',
    lineHeight: '37px',
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
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
