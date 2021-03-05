import { Button, Card, Input, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import theme from '../../../config/themes/light';
import verify from '../../../assets/images/profile/verify.png';
import ImageBox from '../widgets/ImageBox';

function Verify({ accState }) {
  const classes = useStyles(theme);
  const [input, setInput] = useState('');
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.head}>
          You haven’t verified your account yet...
        </h1>
        <div className={classes.text}>
          If you are an NITR student and have a valid insti email id, you can
          get access to LAN-restricted articles even on the go! Just verify once
          and forget.
        </div>
        <div className={classes.inputBlock}>
          <Typography variant='h3'>Email</Typography>
          <Input
            className={classes.input}
            placeholder='your@nitrkl.ac.in'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className={classes.inputButton}
            variant='contained'
            color='primary'
            onClick={() => accState(1)}
            disabled={!input}
          >
            <span> Sign Up for Newsletter</span>
          </Button>
        </div>
      </div>
      <ImageBox widthImage='59%' img={verify} />{' '}
    </div>
  );
}

export default Verify;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
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
