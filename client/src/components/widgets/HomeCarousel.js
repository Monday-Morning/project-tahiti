import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import { useSwipeable } from 'react-swipeable';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

export const CarouselItem = ({ children}) => {
  const classes = useStyles();
  return (
    <div className={classes.carouselItem}>
      {children}
    </div>
  );
};

const HomeCarousel = ({ children }) => {
  const classes = useStyles();
  const [activeIndex, setactiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    let index = newIndex;
    if (index < 0) {
      index = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      index = 0;
    }

    setactiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 10000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div handlers={handlers} className={classes.carousel}>
      <div
        className={classes.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child),
        )}
      </div>
      <div className={classes.indicators}>
        <button
          type='button'
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className={classes.button}
        >
          <ArrowBack />
        </button>
        <button
          type='button'
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className={classes.button}
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;

const useStyles = makeStyles(() => ({
  carousel: {
    overflow: 'hidden',
  },
  inner: {
    whiteSpace: 'nowrap',
    transition: 'transform 0.3s',
    height: 'auto',
    width: '100%',
  },
  carouselItem: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
  },
  indicators: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '15px 5px',
    color: '#6E6E6E',
    background: 'transparent',
    borderRadius: '100%',
  },
}));
