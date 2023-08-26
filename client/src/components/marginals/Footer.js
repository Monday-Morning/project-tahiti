import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import makeStyles from '@mui/styles/makeStyles';
import { Container, Grid, Typography } from '@mui/material';
import { ArrowRightCircle } from 'react-feather';

// Assets
import logo from '../../assets/images/logo.png';
import googlePlay from '../../assets/images/logos/google_play.png';
import { ARCHIVES } from '../../assets/placeholder/guide';

const Footer = () => {
  const classes = useStyles();
  const [activeMonth, setMonth] = useState(ARCHIVES.months[0]);
  const [activeYear, setYear] = useState(ARCHIVES.years[0]);
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container direction='row'>
          <Grid item sm={6} md={4}>
            <div className={classes.aboutInfo}>
              <div className={classes.logoContainer}>
                <Image
                  src={logo}
                  alt='Monday Morning'
                  className={classes.logo}
                  layout='responsive'
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
          <Grid item sm={6} md={4} className={classes.containerGrid}>
            <Grid
              container
              justifyContent='space-between'
              className={classes.categoryContainer}
            >
              <Grid item xs={4}>
                <ul className={classes.categories}>
                  <li>
                    <Link href='/campus' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Campus
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/connect' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Connect
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/ddcwc' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        DD & CWC
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/career' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Career
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/alumni' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Alumni
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/expressions'
                      className={classes.links}
                      passHref
                    >
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Expressions
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul className={classes.categories}>
                  <li>
                    <Link href='/about' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        About
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/guide' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Guide
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Contact Us
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul className={classes.categories}>
                  <Typography
                    variant='body1'
                    style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                  >
                    <li className={classes.links}>Subscribe</li>
                  </Typography>
                  <li>
                    <Link href='/policy' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Terms of Use
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/policy' className={classes.links} passHref>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                      >
                        Privacy Policy
                      </Typography>
                    </Link>
                  </li>
                  <Typography
                    variant='body1'
                    style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                  >
                    <li className={classes.links}>Sitemap</li>
                  </Typography>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={4}>
            <div className={classes.rightSide}>
              <div>
                <Link
                  passHref
                  href='https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                >
                  <div className={classes.appButtonContainer}>
                    <Image
                      alt='Get it on Google Play'
                      src={googlePlay}
                      className={classes.appButton}
                      layout='responsive'
                    />
                  </div>
                </Link>
                <div className={classes.archives}>
                  <Typography variant='body1' style={{ fontWeight: 'bolder' }}>
                    Archives
                  </Typography>

                  <form className={classes.archivesWrapper}>
                    <select
                      name='month'
                      className={classes.archivesSelect}
                      onChange={(e) => setMonth(e.target.value)}
                      defaultValue={''}
                    >
                      <option value='' disabled hidden>
                        <Typography variant='body1'>Month</Typography>
                      </option>
                      {ARCHIVES.months.map((month, key) => (
                        <option key={key} value={month}>
                          <Typography variant='body1'>{month}</Typography>
                        </option>
                      ))}
                    </select>
                    <select
                      name='year'
                      className={classes.archivesSelect}
                      onChange={(e) => setYear(e.target.value)}
                      defaultValue={''}
                    >
                      <option value='' disabled hidden>
                        <Typography variant='body1'>Year</Typography>
                      </option>
                      {ARCHIVES.years.map((year, key) => (
                        <option
                          key={key}
                          value={year}
                          className={classes.selectItem}
                        >
                          <Typography variant='body1'>{year}</Typography>
                        </option>
                      ))}
                    </select>
                    <div className={classes.archiveIcon}>
                      <Link
                        passHref
                        href={`/archive/${activeYear}/${activeMonth}`}
                      >
                        <ArrowRightCircle size={24} cursor='pointer' />
                      </Link>
                    </div>
                  </form>
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
              © 2015 - {new Date().getFullYear()} Monday Morning. All rights
              reserved.
            </Typography>
          </div>
          <div className={classes.socialIcons}>
            <Link passHref href='https://www.facebook.com/mondaymorningnitr'>
              <span className={classes.socialIcon}>
                <i className='fab fa-facebook-f' />
              </span>
            </Link>
            <Link
              passHref
              href='https://twitter.com/mmnitrkl?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
            >
              <span className={classes.socialIcon}>
                <i className='fab fa-twitter' />
              </span>
            </Link>

            <Link passHref href='https://www.youtube.com/c/MondayMorningNITR'>
              <span className={classes.socialIcon}>
                <i className='fab fa-youtube' />
              </span>
            </Link>

            <Link
              passHref
              href='https://in.linkedin.com/company/monday-morning-the-official-student-media-body-of-nit-rourkela'
            >
              <span className={classes.socialIcon}>
                <i className='fab fa-linkedin' />
              </span>
            </Link>

            <Link
              passHref
              href='https://www.instagram.com/mondaymorningnitrofficial/?hl=en'
            >
              <span className={classes.socialIcon}>
                <i className='fab fa-instagram' />
              </span>
            </Link>
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
    marginTop: '25px',
    backgroundColor: theme.palette.secondary.neutral20,
  },
  aboutInfo: {
    padding: '0 100px 50px 0',
    [theme.breakpoints.down('md')]: {
      padding: '0 1rem',
    },
  },
  logoContainer: {
    width: '200px',
    display: 'block',
  },
  aboutText: {
    marginTop: '20px',
    textAlign: 'justify',
  },
  containerGrid: {
    width: '100%',
  },
  categoryContainer: {
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '20px',
      padding: 'unset',
    },
    '& a': {
      color: theme.palette.common.black,
    },
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '1.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '0 1rem',
    },
  },
  appButtonContainer: {
    marginRight: '0',
    width: '250px',
    display: 'block',
    cursor: 'pointer',
  },
  archives: {
    marginTop: '20px',
    marginLeft: '18px',
  },
  archivesSelect: {
    marginRight: '0.75rem',
    fontSize: '20px',
    cursor: 'pointer',
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
    // Container Properties
    maxWidth: '1280px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
    },
  },
  copyRight: {
    [theme.breakpoints.down('md')]: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      textAlign: 'center',
    },
  },
  socialIcons: {
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginTop: '1.25rem',
    },
  },
  socialIcon: {
    marginLeft: '20px',
    fontSize: '18px',
    cursor: 'pointer',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      marginLeft: '10px',
    },
  },
  links: {
    textDecoration: 'none',
    fontWeight: theme.typography.fontWeightBold,
    cursor: 'pointer',
  },
}));
