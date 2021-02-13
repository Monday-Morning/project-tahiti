import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import theme from '../../../config/themes/light';
import passwdImg from '../../../assets/images/profile/passwd.png';

function NewPasswd(props) {
  const classes = useStyles(theme);
  const [passwd, setPasswd] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.head}>Enter your new password</h1>

        <div className={classes.inputBlock}>
          <div className={classes.block}>
            <div className={classes.inputLabel}>New password</div>
            <TextField className={classes.input} placeholder='new password' value={passwd} onChange={(e) => setPasswd(e.target.value)} />
            <span>Must be atleast 8 characters long</span>
            <span>Should have atleast one uppercase and one lowercase character</span>
          </div>
          <div className={classes.block}>
            <div className={classes.inputLabel}>Confirm password</div>
            <TextField className={classes.input} placeholder='confirm password' value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            <span className={confirm ? ((passwd == confirm) ? classes.hide : '') : classes.hide} >Passwords don’t match</span>
          </div>
          <Button className={classes.inputButton} variant='contained' color='primary' onClick={() => props.passwdState(3)} disabled={!passwd || !confirm || (passwd != confirm)}>
            Change My Password
            </Button>
        </div>
      </div>
      <ImageBox widthImage="33%" img={passwd} />
    </div >
  );
}

export default NewPasswd;

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
  text: {
    marginTop: '10px',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,

  },
  inputBlock: {
    marginTop: '26px',
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',

    },

  },
  block: {
    marginTop: '23px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    '& span': {
      fontSize: '1rem',
      fontFamily: 'Source Sans Pro !important',
      lineHeight: '1.5rem',
      fontWeight: '400',

    },
  },
  hide: {
    display: 'none',
  },
  inputLabel: {
    fontWeight: '400',
    fontSize: '1.25rem',
    lineHeight: '25.14px',
    fontFamily: 'Source Sans Pro !important',
    color: theme.palette.common.black,
  },
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
    lineHeight: '37px',
    marginTop: '10px',
    '& span': {
      fontSize: '1.25rem !important',
      lineHeight: '1.75rem',
      fontFamily: 'Source Sans Pro !important',
    },
  },
}));
