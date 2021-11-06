import React, { useState, useEffect } from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

const ScrollToTopButton = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.pageYOffset;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div className={classes.fab}>
      <Fab
        className={classes.fab}
        color='secondary'
        aria-label='scrollToTop'
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      >
        <KeyboardArrowUp />
      </Fab>
    </div>
  );
};

export default ScrollToTopButton;

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    boxShadow: `0px 0px 10px #5a5a5a`,
  },
}));
