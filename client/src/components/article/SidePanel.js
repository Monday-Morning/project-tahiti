import React, { useState } from 'react';

// libraries
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-scroll';

// Components
import TableOfContent from './TableOfContent';
import { Share2 } from 'react-feather';

const ReactionIcon = () => {
  const [reaction, setReaction] = useState(false);
  return (
    <i
      className={reaction ? 'fa fa-lightbulb' : 'far fa-lightbulb'}
      onClick={() => {
        setReaction(!reaction);
      }}
    ></i>
  );
};

const Reactions = () => {
  const classes = useStyles();
  return (
    <div className={classes.reactionsWrapper}>
      <span className={classes.icon}>
        <ReactionIcon />
      </span>
      <span className={classes.icon}>
        {/* <i className='fa fa-share-alt'></i> */}
        <Share2 size={28} />
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
  //Expanded State of Table of Contents (In Mobile View Only)

  const classes = useStyles();
  return (
    <div className={props.toggleSidebar ? classes.expanded : classes.wrapper}>
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
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1rem',
    },
  },
  icon: {
    fontSize: '28px',
    marginTop: '2rem',
    color: '#999999',
  },
}));
