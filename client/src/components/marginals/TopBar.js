import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.topBar}>
      <div className={classes.container}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to='' className={classes.navLink}>
              About
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to='' className={classes.navLink}>
              Guide
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to='' className={classes.navLink}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TopBar;

const useStyles = makeStyles((theme) => ({
  topBar: {
    marginTop: '0',
    backgroundColor: theme.palette.primary.blue50,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '40px',
    //Container Properties
    maxWidth: '1280px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  navList: {
    margin: '0',
    listStyleType: 'none',
  },
  navItem: {
    display: 'inline',
    marginLeft: '40px',
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
      fontSize: '1rem',
    },
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
}));
