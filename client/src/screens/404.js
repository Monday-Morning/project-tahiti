import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ArrowForward from '@mui/icons-material/ArrowForward';

import logo from '../assets/images/logo_mm.png';
import LINKS from '../utils/getLinks';
import Image from 'next/image';

const SOCIALS = [
  {
    link: 'https://www.facebook.com/mondaymorningnitr/',
    icons: 'fab fa-facebook-f',
  },
  {
    link: 'https://twitter.com/mmnitrkl?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    icons: 'fab fa-twitter',
  },
  {
    link: 'https://www.youtube.com/c/MondayMorningNITR',
    icons: 'fab fa-youtube',
  },
  {
    link: 'https://in.linkedin.com/company/monday-morning-the-official-student-media-body-of-nit-rourkela',
    icons: 'fab fa-linkedin',
  },
  {
    link: 'https://www.instagram.com/mondaymorningnitrofficial/?hl=en',
    icons: 'fab fa-instagram',
  },
];

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item className={classes.gridContainer}>
          <Image src={logo} alt='MM Logo' className={classes.logo} />
        </Grid>
        <Grid item className={classes.gridContainer}>
          <Typography className={classes.main}>404 ERROR</Typography>
          <Typography className={classes.subTitle}>Page not found.</Typography>
          <Typography className={classes.body}>
            Sorry, we couldn’t find the page you are looking for.
          </Typography>
        </Grid>
        <Grid item className={classes.gridContainer}>
          <Link to={LINKS.CATEGORIES.HOME} className={classes.link}>
            <Typography className={classes.homeLink}>
              Go back home <ArrowForward />
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.socialIcons}>
        {SOCIALS.map(({ icons, link }) => (
          <a key={link} href={link} target='_blank' rel='noreferrer'>
            <span className={classes.socialIcon}>
              <i className={icons} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PageNotFound;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    padding: '50px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('lg')]: {
      padding: '20px',
    },
  },
  gridContainer: {
    marginTop: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    height: 100,
    width: 100,
    [theme.breakpoints.down('md')]: {
      height: 60,
      width: 60,
    },
  },
  main: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#006DCC',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  subTitle: {
    marginTop: '28px',
    fontSize: '72px',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
    },
  },
  body: {
    marginTop: '28px',
    fontSize: '24px',
    color: '#6E6E6E',
    [theme.breakpoints.down('md')]: {
      fontSize: '19px',
    },
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  homeLink: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#006DCC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: '150px',
  },
  socialIcon: {
    marginLeft: '20px',
    fontSize: '21px',
    color: '#999999',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      marginLeft: '10px',
      fontSize: '15px',
    },
  },
}));
