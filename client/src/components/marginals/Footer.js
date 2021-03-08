import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/logo.png';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { ArrowRightCircle } from 'react-feather';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container direction='row'>
          <Grid item sm={4}>
            <div className={classes.aboutInfo}>
              <img src={logo} alt='Monday Morning' className={classes.logo} />
              <Typography variant='body2' className={classes.aboutText}>
                Monday Morning is the student Media Body of National Institute
                Of Technology Rourkela. We cover all the events, issues and
                activities going on inside the campus. We serve as a link
                between the administration and the students.
              </Typography>
            </div>
          </Grid>
          <Grid item sm={4} className={classes.containerGrid}>
            <Grid
              container
              justify='space-between'
              className={classes.categoryContainer}
            >
              <Grid item xs={4}>
                <ul className={classes.categories}>
                  <li>Campus</li>
                  <li>Connect</li>
                  <li>DD {'&'} CWC</li>
                  <li>Career</li>
                  <li>Alumni</li>
                  <li>Expressions</li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul className={classes.categories}>
                  <li>About</li>
                  <li>Guide</li>
                  <li>Contact Us</li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul className={classes.categories}>
                  <li>Subscribe</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Sitemap</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.rightSide}>
              <div>
                <a href='https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <img
                    alt='Get it on Google Play'
                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                    className={classes.appButton}
                  />
                </a>
                <div className={classes.archives}>
                  <Typography variant='body1'>Archives</Typography>

                  <div className={classes.archivesWrapper}>
                    <select name='month' className={classes.archivesSelect}>
                      <option value='Month'>Month</option>
                    </select>
                    <select name='year' className={classes.archivesSelect}>
                      <option value='Year'>Year</option>
                    </select>
                    <div className={classes.archiveIcon}>
                      {/* <i className='fa fa-arrow-circle-right'></i> */}
                      <ArrowRightCircle size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.bottomWrapper}>
        <div className={classes.bottomBar}>
          <div>
            <Typography variant='body1' className={classes.copyRight}>
              © 2015 - 2020 Monday Morning. All rights reserved.
            </Typography>
          </div>
          <div className={classes.socialIcons}>
            <span className={classes.socialIcon}>
              <i className='fab fa-facebook-f'></i>
            </span>
            <span className={classes.socialIcon}>
              <i className='fab fa-twitter'></i>
            </span>
            <span className={classes.socialIcon}>
              <i className='fab fa-youtube'></i>
            </span>
            <span className={classes.socialIcon}>
              <i className='fab fa-linkedin'></i>
            </span>
            <span className={classes.socialIcon}>
              <i className='fab fa-instagram'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: '50px',
    backgroundColor: theme.palette.secondary.neutral20,
  },
  aboutInfo: {
    padding: '0 100px 50px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem',
    },
  },
  logo: {
    width: '200px',
  },
  aboutText: {
    marginTop: '20px',
    textAlign: 'justify',
  },
  containerGrid: {
    width: '100%',
  },
  categoryContainer: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.5rem',
      marginBottom: '1.5rem',
      padding: '0 1rem',
    },
  },
  categories: {
    listStyleType: 'none',
    marginTop: '0',
    lineHeight: '24px',
    fontSize: '16px',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '20px',
      padding: 'unset',
    },
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem',
    },
  },
  appButton: {
    marginRight: '0',
    width: '100%',
  },
  archives: {
    marginTop: '40px',
    marginRight: '0',
  },
  archivesSelect: {
    marginRight: '0.75rem',
    padding: '4px 12px',
    border: '1px solid',
    borderColor: theme.palette.common.black,
    borderRadius: '4px',
  },
  archivesWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  archiveIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  bottomWrapper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  bottomBar: {
    minHeight: '70px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    //Container Properties
    maxWidth: '1280px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
    },
  },
  copyRight: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      textAlign: 'center',
    },
  },
  socialIcons: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: '1.25rem',
    },
  },
  socialIcon: {
    marginLeft: '20px',
    fontSize: '18px',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
}));
