import React from 'react';
import { PROFILEPAGES } from '../../../assets/placeholder/profile';
import { Button, Card, Input, makeStyles } from '@material-ui/core';
import theme from '../../../config/themes/light';
import newsletter from '../../../assets/images/profile/newsletterPic.png';


function Verified() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <span>Newsletter</span>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.head}>Awesome! You’re all caught up. </h1>
          <div className={classes.text}>
            You’ve already signed up for the newsletter. Catch up on the latest news and happenings
            at NITR. See you then!
          </div>
          <div className={classes.text}>You’re receiving your newsletter on <br />
            <div>
              {PROFILEPAGES.PROFILE.INFO[2].value}
            </div>
            <br />
            <span>Change Email.</span>
          </div>
          <div className={classes.note}>
            Write to <span> morning.monday@gmail.com</span> incase you haven’t started receiving newsletters.
            These are delivered once in a week or in a fortnight during the working session of the
            institute
          </div>
        </div>
        <div className={classes.imageBox}>
          <img src={newsletter} alt='' className={classes.img} />
        </div>
      </Card>
    </div>
  );
}

export default Verified;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    '& span': {
      fontFamily: 'IBM Sans Pro',
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
    marginTop: '45px',
    marginLeft: '53px',
    width: '420px',
  },
  head: {
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
  },
  text: {
    marginTop: '29px',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,
    '& div': {
      fontWeight: '600',
    },
    '& span': {
      fontFamily: 'Source Sans Pro',
      fonWeight: '400',
      fontSize: '1rem',
      lineHeight: '26px',
      textDecoration: 'underline',

    },
  },
  note: {
    marginTop: '53px',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    '& span': {
      fontFamily: 'Source Sans Pro',
      textDecoration: 'underline',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: '700',
    },
  },
  imageBox: {
    marginLeft: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3rem',
  },
  img: {
    height: '276px',
    width: '367px',
  },
}))