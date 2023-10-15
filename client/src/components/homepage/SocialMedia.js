import React from 'react';

// Libraries
import { Button, Typography, Grid, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Components
import HomeCarousel from '../widgets/HomeCarousel';

// Assets
import insta1 from '../../assets/images/instagram/insta1.jpeg';
import insta2 from '../../assets/images/instagram/insta2.jpeg';
import insta3 from '../../assets/images/instagram/insta3.jpeg';
import insta4 from '../../assets/images/instagram/insta4.jpeg';
import insta5 from '../../assets/images/instagram/insta5.jpeg';
import insta6 from '../../assets/images/instagram/insta6.jpeg';
import Image from 'next/image';
import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';

const INSTA_LINKS = [insta1, insta2, insta3, insta4, insta5, insta6];

const Header = ({ Icon, title, buttonText, onClick, ...color }) => {
  const classes = useStyles(color);

  return (
    <div className={classes.header}>
      <span
        className={classes.titleContainer}
        onClick={onClick}
        onKeyDown={onClick}
        role='button'
        tabIndex='0'
      >
        <Icon className={classes.icon} color='red' />

        <Typography variant='body1' className={classes.title}>
          {title}
        </Typography>
      </span>

      <Button className={classes.button} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};

const Socials = ({ youtubeLinks }) => {
  const classes = useStyles();

  const openYoutube = () =>
    window.open(
      'https://www.youtube.com/channel/UCC2H5dnJ0AD-y8Fcscdq6bA',
      '_blank',
    );
  const openInstagram = () =>
    window.open(
      'https://www.instagram.com/mondaymorningnitrofficial/',
      '_blank',
    );

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={12} md={6} lg={6}>
          <Paper className={classes.card}>
            <Header
              Icon={Instagram}
              title='mondaymorningnitr'
              buttonText='Follow'
              onClick={openInstagram}
              color='#F56040'
            />

            <Grid container spacing={3}>
              {INSTA_LINKS.map((link) => (
                <Grid
                  key={link}
                  item
                  xs={4}
                  className={classes.instaImageContainer}
                >
                  <Image
                    src={link}
                    className={classes.instaImage}
                    alt='Monday Morning Instagram'
                    onClick={openInstagram}
                    onKeyDown={openInstagram}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role='button'
                    tabIndex='0'
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item sm={12} md={6} lg={6} className={classes.grid}>
          <Paper className={classes.card}>
            <Header
              Icon={YouTube}
              title='Monday Morning'
              buttonText='Subscribe'
              onClick={openYoutube}
              color='red'
            />
            <HomeCarousel links={youtubeLinks} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Socials;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: '100%',
    height: '100%',
    padding: '20px',
    margin: '0px',
    borderRadius: '10px',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#ffffff',
  },
  header: {
    width: '100%',
    height: 'auto',
    padding: '0px',
    marginBottom: '20px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: (props) => props.color,
  },
  titleContainer: {
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  grid: {
    width: '100%',
  },
  title: {
    fontSize: '16px',
    fontWeight: '700',
    fontFamily: 'Source Sans Pro',
    lineHeight: '24px',
    marginLeft: '10px',
  },
  button: {
    background: 'rgba(0, 109, 204, 1)',
    borderRadius: '4px',
    width: 'auto',
    height: '28px',
    padding: '2px 14px',
    color: '#ffffff',

    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '28px',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  instaImage: {
    width: '100%',
    height: 'auto',
  },
  instaImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
