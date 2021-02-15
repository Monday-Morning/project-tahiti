import { Button, Card, Input, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import theme from '../../../config/themes/light';
import passwd from '../../../assets/images/profile/passwd.png';
import ImageBox from '../widgets/ImageBox';

function Forgot(props) {
  const classes = useStyles(theme);
  const [input, setInput] = useState('');
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.head}>Forgot your Password?</h1>
        <div className={classes.text}>
          Don’t worry! Just type in the email address you’ve registered with us.
          </div>
        <div className={classes.inputBlock}>
          <div className={classes.emailHead}>Email</div>
          <Input className={classes.input} placeholder='your@email.com' value={input} onChange={(e) => setInput(e.target.value)} />
          <Button className={classes.inputButton} variant='contained' color='primary' onClick={() => props.passwdState(1)} disabled={!input}>
            Send reset link
            </Button>
        </div>

      </div>
      <ImageBox widthImage='33%' img={passwd} />
    </div>
  );
}

export default Forgot;

const useStyles = makeStyles((theme) => ({
  root: {

    display: 'flex',
    justifyContent: 'space-between',
    paddingInline: '6%',
    height: '-webkit-fill-available',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '7%',
    },
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '70px',
    width: '47%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: "center",
      alignItems: 'center',
    },
  },
  head: {
    lineHeight: '2.25rem',
    color: theme.palette.common.black,

  },
  text: {
    marginTop: '62px',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,

  },
  inputBlock: {
    marginTop: '54px',
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',

    },

  },
  emailHead: {
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
