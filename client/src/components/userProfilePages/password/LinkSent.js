import { Button, Card, Input, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import passwd from '../../../assets/images/profile/passwd.png';
import { PROFILEPAGES } from '../../../assets/placeholder/profile';

function LinkSent() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <span>Change Password</span>
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
    width: '404px',
  },
  head: {
    fontSize: '2rem',
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
  },
  text: {
    marginTop: '74px',
    fontSize: '1.25rem',
    fontFamily: 'Source Sans Pro',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,
    '& span': {
      fontFamily: 'Source Sans Pro',
      fontWeight: '700',
    }
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
