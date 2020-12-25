import React, { useState } from 'react';

// libraries
import { makeStyles } from '@material-ui/core';
import TableOfContent from './TableOfContent';
import { Link } from 'react-scroll';

const ReactionIcon = () => {
  const [reaction, setReaction] = useState(false);
  if (reaction) {
    return (
      <i
        className='fa fa-lightbulb'
        onClick={() => {
          setReaction(!reaction);
        }}
      ></i>
    );
  } else {
    return (
      <i
        className='far fa-lightbulb'
        onClick={() => {
          setReaction(!reaction);
        }}
      ></i>
    );
  }
};

const Reactions = () => {
  const classes = useStyles();
  return (
    <div className={classes.reactionsWrapper}>
      <span className={classes.icon}>
        <ReactionIcon />
      </span>
      <span className={classes.icon}>
        <i className='fa fa-share-alt'></i>
      </span>
      <span className={classes.icon}>
        <Link to='commentBox' smooth={true} spy={true} activeClass={classes.indexLinkActive}>
          <i className='far fa-comment'></i>
        </Link>
      </span>
    </div>
  );
};

const SidePanel = (props) => {
  const [expanded, toggleExpanded] = useState(false);

  const classes = useStyles();
  return (
    <div className={expanded ? classes.expanded : classes.wrapper}>
      <TableOfContent index={props.index} />
      <Reactions />
    </div>
  );
};

export default SidePanel;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1rem',
    paddingLeft: '4rem',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 20,
    zIndex: '10',
    '@media (max-width:900px)': {
      position: 'fixed',
      top: '-1rem',
      bottom: '0',
      left: '100%',
      backgroundColor: theme.palette.common.white,
      paddingLeft: '0',
    },
  },
  expanded: {
    '@media (max-width:900px)': {
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
    // alignItems: 'center',
    justify: 'center',
    paddingLeft: '4rem',
    '@media (max-width:900px)': {
      paddingLeft: '1rem',
    },
  },
  icon: {
    fontSize: '28px',
    marginTop: '2rem',
  },
}));
