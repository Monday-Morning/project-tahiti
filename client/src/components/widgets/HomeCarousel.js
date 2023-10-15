import React, { useState, useEffect } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { useSwipeable } from 'react-swipeable';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

const HomeCarousel = ({ links }) => {
  const classes = useStyles();
  const [activeIndex, setactiveIndex] = useState(0);

  useEffect(() => {
    let index = activeIndex;
    if (index < 0) {
      index = links.length - 1;
    } else if (activeIndex >= links.length) {
      index = 0;
    }

    setactiveIndex(index);
  }, [activeIndex, links.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setactiveIndex((prevState) => prevState + 1);
    }, 10000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => setactiveIndex((prevState) => prevState + 1),
    onSwipedRight: () => setactiveIndex((prevState) => prevState - 1),
  });

  return (
    <div handlers={handlers} className={classes.carousel}>
      <div
        className={classes.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {links.map((link) => (
          <iframe
            key={link}
            src={link}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            timeout={10000}
            className={classes.largeVideo}
          />
        ))}
      </div>
      <div className={classes.indicators}>
        <button
          type='button'
          onClick={() => {
            setactiveIndex((prevState) => prevState - 1);
          }}
          className={classes.button}
        >
          <ArrowBack className={classes.buttonIcon} />
        </button>
        <button
          type='button'
          onClick={() => {
            setactiveIndex((prevState) => prevState + 1);
          }}
          className={classes.button}
        >
          <ArrowForward className={classes.buttonIcon} />
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;

const useStyles = makeStyles((theme) => ({
  carousel: {
    overflow: 'hidden',
    display: 'flex',
    height: '90%',
    width: '100%',
    flexDirection: 'column',
    justifyItems: 'center',
  },
  inner: {
    flexGrow: '1',
    [theme.breakpoints.down('md')]: {
      flexBasis: '50vw',
    },
    display: 'inline-block',
    whiteSpace: 'nowrap',
    transition: 'transform 0.3s',
    height: '100%',
    width: '100%',
  },
  indicators: {
    display: 'flex',
    flexBasis: '25px',
    margin: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 5px',
    padding: '0.2rem 0.15rem',
    color: '#6E6E6E',
    background: 'transparent',
    borderRadius: '100%',
  },
  buttonIcon: {
    fontSize: '1em',
  },
  largeVideo: {
    borderRadius: '10px',
    width: '100%',
    height: '100%',
  },
}));
