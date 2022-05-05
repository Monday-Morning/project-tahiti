import React from 'react';
import Image from 'next/image';

import makeStyles from '@mui/styles/makeStyles';
import logo from '../../assets/images/logo.png';
import { Container, Grid, Typography, Button } from '@mui/material';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container direction='row'>
          <Grid item sm={4}>
            <div className={classes.aboutInfo}>
              <div className={classes.logoWrapper}>
                <Image
                  src={logo}
                  alt='Monday Morning'
                  className={classes.logo}
                />
              </div>
              <Typography variant='body2' className={classes.aboutText}>
                Monday Morning is the student Media Body of National Institute
                Of Technology Rourkela. We cover all the events, issues and
                activities going on inside the campus. We serve as a link
                between the administration and the students.
              </Typography>
            </div>
          </Grid>
          <Grid item sm={4}>
            <Grid container>
              <Grid item sm={4}>
                <ul className={classes.categories}>
                  <li>Campus</li>
                  <li>Connect</li>
                  <li>DD {'&'} CWC</li>
                  <li>Career</li>
                  <li>Alumni</li>
                  <li>Expressions</li>
                </ul>
              </Grid>
              <Grid item sm={4}>
                <ul className={classes.categories}>
                  <li>About</li>
                  <li>Guide</li>
                  <li>Contact Us</li>
                </ul>
              </Grid>
              <Grid item sm={4}>
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
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.appButton}
                >
                  Google Play
                </Button>
                <div className={classes.archives}>
                  <Typography variant='body1'>Archives</Typography>

                  <select name='month'>
                    <option value='Month'>Month</option>
                  </select>
                  <select name='year'>
                    <option value='Year'>Year</option>
                  </select>
                  <Button>Submit</Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.bottomWrapper}>
        <div className={classes.bottomBar}>
          <div className={classes.copyRight}>
            <Typography variant='body1'>
              © 2015 - 2020 Monday Morning. All rights reserved.
            </Typography>
          </div>
          <div className={classes.socialIcons}>
            <span className={classes.socialIcon}>f</span>
            <span className={classes.socialIcon}>t</span>
            <span className={classes.socialIcon}>y</span>
            <span className={classes.socialIcon}>l</span>
            <span className={classes.socialIcon}>i</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '50px',
    paddingTop: '50px',
    backgroundColor: theme.palette.secondary.neutral20,
  },
  aboutInfo: {
    padding: '0 100px 50px 0',
  },
  logo: {
    width: '200px',
    '& > span': {
      position: 'unset !important',
    },
  },
  logo: {
    position: 'unset !important',
    height: 'auto !important',
    width: 'auto !important',
  },
  aboutText: {
    marginTop: '20px',
    textAlign: 'justify',
  },
  categories: {
    listStyleType: 'none',
    marginTop: '0',
    lineHeight: '24px',
    fontSize: '16px',
    fontWeight: '700',
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  appButton: {
    marginRight: '0',
  },
  archives: {
    marginTop: '40px',
    marginRight: '0',
  },
  bottomWrapper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  bottomBar: {
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    //Container Properties
    maxWidth: '1280px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  copyRight: {},
  socialIcons: {
    textAlign: 'right',
  },
  socialIcon: {
    marginLeft: '20px',
  },
}));
