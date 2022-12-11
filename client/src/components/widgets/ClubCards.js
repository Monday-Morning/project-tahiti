import React, { useState } from 'react';

import { Card, Stack, Typography, useMediaQuery } from '@mui/material';
import SubCategory from './SubCategory';

import Image from 'next/image';
import makeStyles from '@mui/styles/makeStyles';
import theme from '../../config/themes/light';

import logoFullBlack from '../../assets/images/logo_mm.png';
import PostHolders from '../widgets/PostHolder';
import { club } from '../../assets/placeholder/sac';

const ClubCards = ({ category }) => {
  const [clubsTheme, setClubsTheme] = useState(club[category][0]);
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Card className={classes.root}>
      {club[category].map((value, index) => {
        return (
          <SubCategory
            key={`${index}-${value.title}`}
            text={value.title}
            className={classes.subCategory}
            onclick={() => {
              setClubsTheme(value);
            }}
          />
        );
      })}

      {!matches ? (
        <>
          <Stack direction='row' spacing={2} className={classes.clubInfoStack}>
            {/* <Image
              className={classes.image}
              src={logoFullBlack}
              alt='logo'
              width={138}
              height={138}
            /> */}
            <Stack direction='column' spacing={1}>
              <Typography variant='subtitle1' className={classes.clubTitle}>
                {clubsTheme.title}
              </Typography>
              <Typography variant='body2'>{clubsTheme.text}</Typography>
            </Stack>
          </Stack>
        </>
      ) : (
        <>
          <Stack
            direction='column'
            spacing={2}
            className={classes.clubInfoStack}
          >
            <Stack direction='row' spacing={2}>
              {/* <Image
                className={classes.image}
                src={logoFullBlack}
                alt='logo'
                width={73}
                height={57}
              /> */}
              <Stack direction='column' spacing={1}>
                <Typography variant='subtitle1' className={classes.clubTitle}>
                  {clubsTheme.title}
                </Typography>
                {/* <Typography variant='body1'>Formed in: 20XX</Typography>
                <Typography variant='body1'>Location: TI-214</Typography> */}
              </Stack>
            </Stack>
            <Typography variant='body2'>{clubsTheme.text}</Typography>
          </Stack>
        </>
      )}

      {/* <div className={classes.titleWrapper}>
        <Typography variant='h2' className={classes.subTitle}>
          Postholders
        </Typography>
        <div className={classes.underline} />
      </div>
      <div className={classes.holderDetails}>
        <PostHolders />
        <PostHolders />
        <PostHolders />
        <PostHolders />
      </div> */}
    </Card>
  );
};

export default ClubCards;

const useStyles = makeStyles((theme) => ({
  clubInfoStack: {
    marginTop: '10px',
  },
  clubTitle: {
    fontWeight: 'bold',
  },
  root: {
    padding: '28px 41px',
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
  holderDetails: {
    padding: '5px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
}));
