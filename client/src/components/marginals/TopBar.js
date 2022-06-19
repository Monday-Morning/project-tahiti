import React from 'react';
import Link from 'next/link';

import makeStyles from '@mui/styles/makeStyles';
import { Container } from '@mui/material';

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.topBar}>
      <Container maxWidth='xl'>
        <div className={classes.container}>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link href='/about' className={classes.navLink} passHref>
                <span className={classes.navLink}>About</span>
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link href='/guide' className={classes.navLink} passHref>
                <span className={classes.navLink}>Guide</span>
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link href='/contact' className={classes.navLink} passHref>
                <span className={classes.navLink}>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
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
    // Container Properties
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
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      fontSize: '1rem',
    },
  },
  navLink: {
    fontFamily: 'IBM Plex Sans',
    textDecoration: 'none',
    color: theme.palette.common.white,
    cursor: 'pointer',
  },
}));
