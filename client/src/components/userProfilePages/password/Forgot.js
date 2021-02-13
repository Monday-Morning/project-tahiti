import { Button, Card, Input, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import theme from '../../../config/themes/light';
import passwd from '../../../assets/images/profile/passwd.png';

function Forgot(props) {
  const classes = useStyles(theme);
  const [input, setInput] = useState('');
  return (
    <div className={classes.root}>
      <Typography variant="h2">Change Password</Typography>
      <Card className={classes.wrapper}>
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
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '19px',
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
    display: 'flex',
    flexDirection: 'column',
    marginTop: '26px',
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
  imageBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1rem',
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
