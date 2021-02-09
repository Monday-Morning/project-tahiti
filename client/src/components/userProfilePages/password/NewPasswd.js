import { Button, Card, Input, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import passwd from '../../../assets/images/profile/passwd.png';

function Forgot() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <span>Change Password</span>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.head}>Enter your new password</h1>

          <div className={classes.inputBlock}>
            <div className={classes.block}>
              <div className={classes.inputLabel}>New password</div>
              <TextField className={classes.input} placeholder='new password' />
              <span>Must be atleast 8 characters long</span>
              <span>Should have atleast one uppercase and one lowercase character</span>
            </div>
            <div className={classes.block}>
              <div className={classes.inputLabel}>Confirm password</div>
              <TextField className={classes.input} placeholder='confirm password' />
              <span>Passwords don’t match</span>
            </div>
            <Button className={classes.inputButton} variant='contained' color='primary'>
              Change My Password
            </Button>
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
    '& span': {
      fontFamily: 'IBM Sans Pro ',
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
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '70px',
    marginLeft: '45px',
    width: '419px',
  },
  head: {
    fontSize: '2rem',
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
  },

  inputBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '4.5px',
    fontFamily: 'Source Sans Pro !important',
    width: '322px',
  },
  block: {
    marginTop: '23px',
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      fontSize: '1rem',
      fontFamily: 'Source Sans Pro !important',
      lineHeight: '1.5rem',
      fontWeight: '400',
    },
  },
  inputLabel: {
    fontWeight: '400',
    fontSize: '1.25rem',
    lineHeight: '25.14px',
    fontFamily: 'Source Sans Pro !important',
    color: theme.palette.common.black,
  },
  // inputBox: {},
  input: {
    background: theme.palette.secondary.neutral40,
    width: '100%',
    paddingLeft: '1rem',
    fontStyle: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    marginTop: '12px',
    '&::before': {
      borderBottom: '0 !important',
    },
  },
  inputButton: {
    textTransform: 'unset',
    textAlign: 'center',
    height: '37px',
    marginTop: '10px',
    '& span': {
      fontSize: '1.25rem !important',
      lineHeight: '1.75rem',
      fontFamily: 'Source Sans Pro !important',
    },
  },

  imageBox: {
    marginLeft: '68px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '66px',
  },
  img: {
    height: '328px',
    width: '294px',
  },
}));
