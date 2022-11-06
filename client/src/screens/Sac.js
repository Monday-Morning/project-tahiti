import React, { useState } from 'react';
import { Container, useMediaQuery, Typography } from '@mui/material';
import BackButton from '../components/shared/button/BackButton';
import makeStyles from '@mui/styles/makeStyles';
import Link from 'next/link';

import ROUTES from '../utils/getRoutes';
// import SacClub from '../assets/placeholder/sac';

import Image from 'next/dist/client/image';

import theme from '../config/themes/light';

// images
import SACimagexs from '../assets/images/contact/sac2.png';

import SectionNavbars from '../components/widgets/ClubInfoNavbar';
import SectionNavbar1 from '../components/widgets/SacInfoNavbar';

// import

const SacAndClub = () => {
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <BackButton path='/guide' goTo='Guide' />

      <Typography variant='h1' className={classes.sacandclubsinfo}>
        SAC and Clubs Info
      </Typography>
      <div className={classes.down}>
        <Typography variant='h2' className={classes.title1}>
          About SAC
        </Typography>
        <div className={classes.about}>
          <Typography className={classes.text1}>
            Along with academic excellence, NIT Rourkela promotes
            extra-curricular activities to ensure all-round development of
            personality. The Student Activity Centre (SAC) is the central hub
            for student activities, student organizations, programming, events,
            sports, recreation and fun at the institute campus. The Student
            Activity Centre is organized into four primary societies and a host
            of satellite clubs. Besides, every society has satellite clubs that
            have their management under the overall supervision of SAC. The
            facility is devoted to student recreation and socialization to serve
            students, faculty, staff, alumni, and guests.
          </Typography>
          <div className={classes.image}>
            <Image
              className={classes.image}
              src={SACimagexs}
              alt='SACimage'
              layout='responsive'
            />
          </div>
        </div>
      </div>
      <div className={classes.hr}>
        <Typography variant='h2' className={classes.title}>
          SAC Info
        </Typography>
        <div className={classes.underline} />
      </div>
      <SectionNavbar1 />
      <div className={classes.hr}>
        <Typography variant='h2' className={classes.title}>
          Club Info
        </Typography>
        <div className={classes.underline} />
      </div>
      <SectionNavbars />
    </Container>
  );
};

export default SacAndClub;

const useStyles = makeStyles((theme) => ({
  down: { marginTop: '1.5rem', marginLeft: '10px' },
  CategoryWrapper: {
    maxWidth: '1200px',
    borderRadius: '8px',
    marginTop: '2rem',
    padding: '10px',
    margin: '40px auto 40px auto',
    [theme.breakpoints.down('lg')]: {
      marginTop: '24px',
      padding: '0px 40px 0px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px 0px 35px',
    },
  },
  category: {
    display: 'inline-block',
    marginRight: '10px',
    marginTop: '10px',
    backgroundColor: theme.palette.primary.blue10,
    color: theme.palette.common.black,
    borderRadius: '4px',
    padding: '12px 16px',
    cursor: 'pointer',
  },
  sacandclubsinfo: {
    width: '70%',
    height: '48px',
    fontFamily: 'IBM Plex Sans',
    weight: '600',
    fontSize: '32px',
    lineHeight: '48px',
    color: '#005299',
    marginTop: '2%',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '5px',
      fontSize: '24px',
      paddingTop: '10px',
      marginLeft: '10px',

      width: '90%',
    },
  },
  title1: {
    fontStyle: 'normal',
    font: '600',
    fontSize: '24px',
    lineHeight: '32px',
    color: '#000000 ',
    display: 'inline',
    marginTop: '90px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
    },
  },
  about: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
  },
  text1: {
    width: '50%',
    fontSize: '18px',
    fontStyle: 'normal',
    paddingRight: '20px',
    paddingTop: '20px',
    fontWeight: '400',
    lineHeight: '28px',
    fontFamily: 'Source Sans Pro',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '400',
      width: '100%',
    },
  },
  image: {
    padding: '20px',
    width: '50%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  hr: {
    display: 'flex',
    marginTop: '6%',
    marginBottom: '1.8rem',
  },

  underline: {
    border: '1px solid #000000',
    backgroundColor: 'black',
    height: '1.5px',
    marginLeft: '10px',
    marginTop: '25px',
    width: '100%',
    opacity: '30%',
    flex: 1,
  },
  title: {
    display: 'inline',
    whiteSpace: 'nowrap',
    marginLeft: '10px',
  },
}));
