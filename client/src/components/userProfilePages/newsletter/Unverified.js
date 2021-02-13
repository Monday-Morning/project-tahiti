import { Button, Card, Input, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import theme from '../../../config/themes/light';
import newsletter from '../../../assets/images/profile/newsletterPic.png';

function Unverified({ nLState }) {
  const classes = useStyles(theme);
  const [input, setInput] = useState('');
  return (
    <div className={classes.root}>
      <Typography variant="h2">Newsletter</Typography>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.head}>You haven’t signed up for the newsletter yet...</h1>
          <div className={classes.text}>
            Sign up for the MM newsletter and get news and articles delivered straight to your
            mailbox!
          </div>
          <div className={classes.inputBlock}>
            <Typography variant="h3">Email</Typography>
            <Input
              className={classes.input}
              placeholder='your@email.com'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              className={classes.inputButton}
              variant='contained'
              color='primary'
              onClick={() => nLState(1)}
              disabled={!input}
            >
              Sign Up for Newsletter
            </Button>
          </div>
          <div className={classes.note}>
            <span>Note:</span> Newsletters are sent once a week or once in a fortnight during the
            working session of the college
          </div>
        </div>
        <div className={classes.imageBox}>
          <img src={newsletter} alt='' className={classes.img} />
        </div>
      </Card>
    </div>
  );
}

export default Unverified;

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
  note: {
    marginTop: '61px',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    '& span': {
      fontFamily: 'Source Sans Pro',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: '700',
    },
  },
  imageBox: {
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '41%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',

    },

  },
  img: {
    height: 'auto',
    width: '100%',
  },
}));
