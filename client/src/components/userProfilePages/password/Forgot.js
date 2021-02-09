import { Button, Card, Input, makeStyles } from '@material-ui/core';
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
          <h1 className={classes.head}>Forgot your Password?</h1>
          <div className={classes.text}>
            Don’t worry! Just type in the email address you’ve registered with us.
          </div>
          <div className={classes.inputBlock}>
            <div className={classes.emailHead}>Email</div>
            <Input className={classes.input} placeholder='your@email.com' />
            <Button className={classes.inputButton} variant='contained' color='primary'>
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
    width: '322px',
  },
  emailHead: {
    fontFamily: 'IBM Sans Plex !important',
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '1.5rem',
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
