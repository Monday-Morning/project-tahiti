import React from 'react';

// Libraries
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import { Youtube, Instagram } from 'react-feather';

// const YOUTUBE_LINKS = ['Link1', 'Link2', 'Link3'];

const Header = ({ Icon, title, buttonText, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <span
        className={classes.titleContainer}
        onClick={onClick}
        onKeyDown={onClick}
        role='button'
        tabIndex='0'
      >
        <Icon className={classes.icon} />

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

const Socials = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={12} md={6} lg={6}>
          <Paper className={classes.card}>
            <Header
              Icon={Instagram}
              title='mondaymorningnitr'
              buttonText='Follow'
              onClick={() =>
                window.open(
                  'https://www.instagram.com/mondaymorningnitrofficial',
                  '_blank',
                )
              }
            />
          </Paper>
        </Grid>

        <Grid item sm={12} md={6} lg={6}>
          <Paper className={classes.card}>
            <Header
              Icon={Youtube}
              title='Monday Morning'
              buttonText='Subscribe'
              onClick={() =>
                window.open(
                  'https://www.youtube.com/channel/UCC2H5dnJ0AD-y8Fcscdq6bA',
                  '_blank',
                )
              }
            />
            <iframe
              width='520'
              height='292'
              src='https://www.youtube.com/embed/_KJlm1mafGo'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className={classes.largeVideo}
            />

            <div className={classes.subVideoContainer}>
              <iframe
                width='248'
                height='139'
                src='https://www.youtube.com/embed/btc-_kqkdpc'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className={classes.smallVideo}
              />
              <iframe
                width='248'
                height='139'
                src='https://www.youtube.com/embed/c6SglPpwmVg'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className={classes.smallVideo}
              />
            </div>
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
    borderRadius: '10px',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
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
  icon: {},
  titleContainer: {
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
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
  largeVideo: {
    width: '100%',
    height: '300px',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  subVideoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallVideo: {
    width: '48%',
    height: '140px',
    borderRadius: '10px',
  },
}));
