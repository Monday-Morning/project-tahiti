import React, { useEffect, useState } from 'react';
import Bowser from 'bowser';

//libraries
import makeStyles from '@mui/styles/makeStyles';
import theme from '../../config/themes/light';
import { Button, Slide, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

//assets
import { APPS } from '../../assets/placeholder/appRecommender';

function AppRecommender() {
  const classes = useStyles();
  const mobileMatches = useMediaQuery(theme.breakpoints.down('sm'));
  const { welcomeMessage, title, sources } = APPS;

  const [display, setDisplay] = useState(true);
  const [currentBrowser, setCurrentBrowser] = useState(null);

  useEffect(() => {
    const browser =
      (!!window.navigator.brave && 'Brave') ||
      Bowser.getParser(window.navigator.userAgent).getBrowserName();

    setCurrentBrowser(browser);
  }, []);

  const handleClick = (link, current) => {
    current ? setDisplay(false) : window.open(link);
  };

  return (
    mobileMatches && (
      <Slide in={display} direction={'up'} unmountOnExit>
        <div className={classes.container}>
          <div className={classes.message}>
            <Typography variant='body2' className={classes.text}>
              {welcomeMessage}
            </Typography>
          </div>
          <div className={classes.wrapper}>
            <Typography variant='h2' className={classes.text}>
              {title}
            </Typography>
            <div className={classes.recommendWrapper}>
              {sources.map(
                ({ logo, name, link, current, browser }) =>
                  (!current || browser === currentBrowser) && (
                    <div className={classes.appWrapper} key={name}>
                      <span className={classes.logoContainer}>
                        <Image src={logo} className={classes.img} />
                      </span>
                      <Typography variant='h3' className={classes.text}>
                        {name}
                      </Typography>
                      <Button
                        variant={!current ? 'contained' : 'outlined'}
                        color='primary'
                        className={classes.appButton}
                        onClick={() => {
                          handleClick(link, current);
                        }}
                      >
                        Continue
                      </Button>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </Slide>
    )
  );
}

export default AppRecommender;

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    width: '100%',
    zIndex: theme.zIndex.appBar,
    bottom: 0,
    backgroundColor: theme.palette.secondary.main,
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  wrapper: {
    padding: '0 16px 16px 16px',
  },
  message: {
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  text: {
    textAlign: 'center',
    color: theme.palette.secondary.neutral20,
    padding: '15px',
  },
  recommendWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  appWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {
    maxWidth: '60px',
    height: '100%',
    border: `1px solid ${theme.palette.secondary.neutral80}`,
    borderRadius: '10px',
  },
  appButton: {
    borderRadius: '100px',
    padding: '12px 25px',
    marginLeft: 'auto',
  },
}));
