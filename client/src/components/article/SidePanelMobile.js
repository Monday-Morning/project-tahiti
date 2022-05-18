import React, { useEffect, useState } from 'react';

// libraries
import { makeStyles, SwipeableDrawer } from '@material-ui/core';
import { Link } from 'react-scroll';

// Components
import TableOfContent from './TableOfContent';
import Share from '../widgets/Share';

const ReactionIcon = () => {
  const [reaction, setReaction] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <i
      className={reaction ? 'fa fa-lightbulb' : 'far fa-lightbulb'}
      onClick={() => setReaction(!reaction)}
      onKeyDown={() => setReaction(!reaction)}
      role='button'
      tabIndex={0}
    />
  );
};

const SidePanelMobile = ({ content, articleTitle }) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [windowHref, setWindowHref] = useState(null);

  useEffect(() => setWindowHref(window.location.href), []);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={'right'}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div>
          <div className={classes.reactionsWrapper}>
            <span className={classes.icon}>
              <ReactionIcon />
            </span>
            <span className={classes.icon}>
              <Share title={articleTitle} url={windowHref} size={28} />
            </span>
            <span className={classes.icon}>
              <Link
                to='commentBox'
                smooth
                spy
                activeClass={classes.indexLinkActive}
              >
                <i className='far fa-comment' />
              </Link>
            </span>
          </div>
          <TableOfContent content={content} />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default SidePanelMobile;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1rem',
    paddingLeft: '1.5rem',
    zIndex: '10',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      top: '-1rem',
      bottom: '0',
      left: '100%',
      marginTop: 'unset',
      backgroundColor: theme.palette.common.white,
      paddingLeft: '0',
      transition: theme.transitions.create('transform', {
        duration: '0.5s',
      }),
    },
  },
  reactionsWrapper: {
    minWidth: '200px',
    marginTop: '3rem',
    marginBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justify: 'center',
    paddingLeft: '4rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1rem',
    },
  },
  icon: {
    fontSize: '28px',
    marginTop: '2rem',
  },
}));
