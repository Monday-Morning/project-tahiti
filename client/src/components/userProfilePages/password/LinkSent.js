import { makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../config/themes/light';
import passwd from '../../../assets/images/profile/passwd.png';
import { PROFILEPAGES } from '../../../assets/placeholder/profile';
import ImageBox from '../widgets/ImageBox';

function LinkSent() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
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
      <ImageBox widthImage="33%" img={passwd} />
    </div>
  );
}

export default LinkSent;

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
      marginTop: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: "center",
      alignItems: 'center',
    },
  },


  head: {
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  text: {
    marginTop: '4.5rem',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,
    '& span': {
      fontFamily: 'Source Sans Pro',
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '26px',

    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.5rem',
      textAlign: 'center',
    },
  },

}))