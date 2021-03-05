import React from 'react';

// libraries
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//placeholder
import { DETAILS } from '../../assets/placeholder/contact';

//image
import map from '../../assets/images/contact/map.png';

const Details = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <div className={classes.emailWrapper}>
            <Typography variant='h3' className={classes.emailTitle}>
              {DETAILS.email_title}
            </Typography>
            {DETAILS.emails.map((email, key) => (
              <Grid item key={key} className={classes.mail}>
                <Typography variant='body2'>
                  <span className={classes.mailFor2}>{email.for}</span>
                </Typography>
                <Typography variant='body1'>
                  <a href={`mailto:${email.id}`} className={classes.mailid}>
                    {email.id}
                  </a>
                  <span className={classes.mailFor1}> for {email.for}</span>
                </Typography>
              </Grid>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div className={classes.ccWrapper}>
            <Typography variant='h3' className={classes.ccTitle}>
              {DETAILS.cc_title}
            </Typography>
            {DETAILS.CCs.map((cc, key) => (
              <Grid item key={key} className={classes.ccs}>
                <Typography variant='body1'>
                  <span className={classes.cc}>
                    {cc.name} : {cc.number}{' '}
                  </span>
                  <span className={classes.messageIcon}>
                    <i className='far fa-envelope'></i>
                  </span>
                </Typography>
              </Grid>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <div className={classes.socialWrapper}>
            <Typography variant='h3' className={classes.socialTitle}>
              {DETAILS.socialMedia.title}
            </Typography>
            <Grid container className={classes.socialLine}>
              <Grid item xs={12} md={4}>
                <Typography variant='body1'>
                  <i className='fab fa-facebook-f'></i>
                  <a
                    href={`${DETAILS.socialMedia.facebook.link}`}
                    target='_blank'
                    className={classes.social}
                  >
                    {DETAILS.socialMedia.facebook.id}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='body1'>
                  <i className='fab fa-linkedin'></i>
                  <a
                    href={`${DETAILS.socialMedia.linkedIn.link}`}
                    target='_blank'
                    className={classes.social}
                  >
                    {DETAILS.socialMedia.linkedIn.id}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='body1'>
                  <i className='fab fa-youtube'></i>
                  <a
                    href={`${DETAILS.socialMedia.youtube.link}`}
                    target='_blank'
                    className={classes.social}
                  >
                    {DETAILS.socialMedia.youtube.id}
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Typography variant='body1'>
                  <i className='fab fa-twitter'></i>
                  <a
                    href={`${DETAILS.socialMedia.twitter.link}`}
                    target='_blank'
                    className={classes.social}
                  >
                    {DETAILS.socialMedia.twitter.id}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='body1'>
                  <i className='fab fa-instagram'></i>
                  <a
                    href={`${DETAILS.socialMedia.instagram.link}`}
                    target='_blank'
                    className={classes.social}
                  >
                    {DETAILS.socialMedia.instagram.id}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='body1'>
                  <i className='fab fa-spotify'></i>
                  <a
                    href={`${DETAILS.socialMedia.spotify.link}`}
                    target='_blank'
                    className={classes.social}
                  >
                    {DETAILS.socialMedia.spotify.id}
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div className={classes.locationWrapper}>
            <Grid container justify='center'>
              <Grid item xs={6}>
                <Typography variant='h3' className={classes.locationTitle}>
                  {DETAILS.location.title}
                </Typography>
                <Typography variant='body1' className={classes.location}>
                  {DETAILS.location.location1}
                </Typography>
                <Typography variant='body1' className={classes.location}>
                  {DETAILS.location.location2}
                </Typography>
                <Typography variant='body1' className={classes.location}>
                  {DETAILS.location.location3}
                </Typography>
                <Typography variant='body1' className={classes.location}>
                  {DETAILS.location.location4}
                </Typography>
                <Typography variant='body1' className={classes.location}>
                  {DETAILS.location.pin}
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.mapWrapper}>
                <img src={map} alt='Monday Morning' className={classes.map} />
                <a href='https://goo.gl/maps/EKwq5J2x1djPHwVB9' target='_blank'>
                  <Typography variant='body2' className={classes.mapText}>
                    See on map
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '1280px',
    margin: '40px auto 0px auto',
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
      padding: '0px 24px 0px 24px',
    },
  },
  emailWrapper: {
    padding: '18px 0px 24px 24px',
    boxShadow: theme.shadows[0],
    borderRadius: '8px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '12px',
    },
  },
  ccWrapper: {
    padding: '18px 0px 40px 24px',
    boxShadow: theme.shadows[0],
    borderRadius: '8px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '20px',
    },
  },
  emailTitle: {
    paddingBottom: '12px',
  },
  ccTitle: {
    paddingBottom: '16px',
  },
  messageIcon: {
    visibility: 'hidden',
    [theme.breakpoints.down('xs')]: {
      visibility: 'visible',
      paddingLeft: '16px',
    },
  },
  mail: {
    padding: '8px 0px 8px 0px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '4px',
    },
  },
  mailid: {
    fontSize: '18px',
    color: theme.palette.common.black,
    textDecorationLine: 'underline',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
    },
  },
  mailFor1: {
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      visibility: 'hidden',
      fontSize: '0px',
    },
  },
  mailFor2: {
    visibility: 'hidden',
    position: 'absolute',
    color: theme.palette.secondary.neutral70,
    [theme.breakpoints.down('xs')]: {
      visibility: 'visible',
      position: 'relative',
    },
  },
  ccs: {
    padding: '4px 0px 4px 0px',
  },
  cc: {
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
    },
  },
  socialWrapper: {
    padding: '18px 0px 24px 24px',
    boxShadow: theme.shadows[0],
    borderRadius: '8px',
    minHeight: '233px',
  },
  socialTitle: {
    paddingBottom: '30px',
  },
  socialLine: {
    paddingBottom: '24px',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0px',
    },
  },
  social: {
    fontSize: '16px',
    paddingLeft: '4px',
    color: theme.palette.common.black,
    textDecorationLine: 'none',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '26px',
      fontSize: '14px',
      textDecorationLine: 'underline',
    },
  },
  locationWrapper: {
    padding: '18px 0px 24px 24px',
    boxShadow: theme.shadows[0],
    borderRadius: '8px',
  },
  locationTitle: {
    paddingBottom: '12px',
  },
  mapWrapper: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '16px',
    },
  },
  map: {
    width: '174px',
    height: '155px',
    paddingTop: '4px',
    marginLeft: '16px',
    [theme.breakpoints.down('md')]: {
      width: '114px',
      height: '101px',
    },
  },
  mapText: {
    color: theme.palette.common.black,
    paddingTop: '12px',
    paddingRight: '16px',
    textDecorationLine: 'underline',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '8px',
      paddingRight: '4px',
    },
  },
  location: {
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
}));
