import React, { useState } from 'react';

// libraries
import { makeStyles } from '@material-ui/core';
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

const SidePanel = ({ structuredContent, toggleSidebar, articleTitle }) => {
  const classes = useStyles();

  return (
    <div className={toggleSidebar ? classes.expanded : classes.wrapper}>
      <TableOfContent structuredContent={structuredContent} />

      {/* Reactions */}
      <div className={classes.reactionsWrapper}>
        <span className={classes.icon}>
          <ReactionIcon />
        </span>
        <span className={classes.icon}>
          <Share title={articleTitle} url={window.location.href} size={28} />
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
    </div>
  );
};

export default SidePanel;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1rem',
    paddingLeft: '4rem',
    position: 'sticky',
    top: 20,
    zIndex: '10',
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
  expanded: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '250px',
      position: 'fixed',
      top: '-1rem',
      bottom: '0',
      left: '100%',
      backgroundColor: theme.palette.common.white,
      paddingLeft: '0',
      boxShadow: theme.shadows[1],
      transform: 'translateX(-100%)',
      transition: theme.transitions.create('transform', {
        duration: '0.5s',
      }),
    },
  },
  reactionsWrapper: {
    marginTop: '4rem',
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
