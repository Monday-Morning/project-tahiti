import React, { useState } from 'react';

import { Card, Stack, Typography } from '@mui/material';
import SubCategory from './SubCategory';

import Image from 'next/image';
import makeStyles from '@mui/styles/makeStyles';

import logoFullBlack from '../../assets/images/logo_mm.png';
import PostHolders from '../widgets/PostHolder';
// import { useState } from 'react';
const ClubCards = () => {
  const [clubsTheme, setClubsTheme] = useState({
    title: 'akriti',
    text: 'AKRITI is an art club of NIT Rourkela registered under the Literary & Cultural Society, SAC.This club is dedicated to promote and support art enthusiasts in different forms of art existing in India as well as different parts of the globe.Apart from this ,AKRITI club also conducts regular workshops,various events.',
  });
  const classes = useStyles();
  const clubs = [
    {
      title: 'akriti',
      text: 'AKRITI is an art club of NIT Rourkela registered under the Literary & Cultural Society, SAC.This club is dedicated to promote and support art enthusiasts in different forms of art existing in India as well as different parts of the globe.Apart from this ,AKRITI club also conducts regular workshops,various events.',
    },
    {
      title: 'Cinematics',
      text: 'KRITI is an art club of NIT Rourkela registered under the Literary & Cultural Society, SAC.This club is dedicated to promote and support art enthusiasts in different forms of art existing in India as well as different parts of the globe.Apart from this ,AKRITI club also conducts regular workshops,various events.',
    },
    {
      title: 'Cinematics',
      text: 'KRITI is an art club of NIT Rourkela registered under the Literary & Cultural Society, SAC.This club is dedicated to promote and support art enthusiasts in different forms of art existing in India as well as different parts of the globe.Apart from this ,AKRITI club also conducts regular workshops,various events.',
    },
    {
      title: 'Cinematics',
      text: 'KRITI is an art club of NIT Rourkela registered under the Literary & Cultural Society, SAC.This club is dedicated to promote and support art enthusiasts in different forms of art existing in India as well as different parts of the globe.Apart from this ,AKRITI club also conducts regular workshops,various events.',
    },
    {
      title: 'Cinematics',
      text: 'KRITI is an art club of NIT Rourkela registered under the Literary & Cultural Society, SAC.This club is dedicated to promote and support art enthusiasts in different forms of art existing in India as well as different parts of the globe.Apart from this ,AKRITI club also conducts regular workshops,various events.',
    },
    {
      title: 'Cinematics',
      text: 'KRITI is an art club of NIT Rourkela registered under the Literary & Cultural Society, SAC.This club is dedicated to promote and support art enthusiasts in different forms of art existing in India as well as different parts of the globe.Apart from this ,AKRITI club also conducts regular workshops,various events.',
    },
    // 'Third Eye',
    // 'Drill n Bass',
    // 'Hall Info',
    // 'Health Info',
    // 'NITR-101',
    // 'Commn. Directory',
  ];

  return (
    <Card className={classes.root}>
      {clubs.map((value, index) => {
        return (
          <SubCategory
            text={value.title}
            theme={value}
            className={classes.subCategory}
            xyz={() => {
              setClubsTheme(value);
            }}
          />
        );
      })}

      <Stack direction='row' spacing={2} sx={{ mt: 4 }}>
        <Image className={classes.image} src={logoFullBlack} alt='logo' width={210} height={200} />
        <Stack direction='column' spacing={1}>
          <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
            {/* Akriti */}
            {clubsTheme.title}
          </Typography>
          <Typography variant='body2'>
            {/* "AKRITI" is an art club of NIT Rourkela registered under the
            Literary & Cultural Society, SAC.This club is dedicated to promote
            and support art enthusiasts in different forms of art existing in
            India as well as different parts of the globe.Apart from this
            ,AKRITI club also conducts regular workshops,various events. */}
            {clubsTheme.text}
          </Typography>
        </Stack>
      </Stack>
      <div className={classes.titleWrapper}>
        <Typography variant='h2' className={classes.subTitle}>
          Postholders
        </Typography>
        <div className={classes.underline} />
      </div>
      <div className={classes.hallDetails}>
        <PostHolders />
        <PostHolders />
        <PostHolders />
        <PostHolders />
      </div>
    </Card>
  );
};

export default ClubCards;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '28px 41px',
  },
  image:{
    [theme.breakpoints.up('sm')]: {
    width:'20px',
    height:'20px'
    },
  },
  navbarContainer: {
    backgroundColor: theme.palette.secondary.neutral20,
    paddingTop: '2.125rem',
  },
  title: {
    display: 'inline-block',
    color: theme.palette.primary.blue60,
    fontFamily: 'IBM Plex Sans',
    borderTop: '4px solid',
    borderColor: theme.palette.primary.blue60,
    minWidth: '124px',
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      minWidth: '205px',
    },
  },
  subCategories: {
    marginTop: '1.5rem',
    maxWidth: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  subCategory: {
    whiteSpace: 'nowrap',
    fontSize: '20px',
  },
  articlesCards: {
    marginTop: '2rem',
    paddingBottom: '2.25rem',
  },
  clubDetails: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100px !important',
    height: '100px !important',
  },
  titleWrapper: {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  subTitle: {
    display: 'inline-block',
    width: 'auto',
    marginTop: '30px',
  },
  underline: {
    border: '1px solid #000000',
    height: '2px',
    backgroundColor: 'black',
    marginLeft: '10px',
    flex: 1,
    opacity: '30%',
  },
  hallDetails: {
    padding: '5px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection:'row',
    justifyContent: 'center',
     alignItems: 'center',
    //  padding:'3px'
      },
  },
}));
