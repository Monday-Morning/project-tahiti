import React, { useContext } from 'react';
import Link from 'next/link';

import makeStyles from '@mui/styles/makeStyles';
import { Container, useMediaQuery } from '@mui/material';
import theme from '../../config/themes/light';

import { authContext } from '../../context/AuthContextProvider';

const TopBar = () => {
  const classes = useStyles();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { user, logout } = useContext(authContext);

  return (
    <div className={classes.topBar}>
      <Container>
        <div className={classes.container}>
          <ul className={classes.navList}>
            {!isMobile && (
              <>
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
              </>
            )}
            {isMobileOrTablet && (
              <li className={classes.navItem}>
                {user ? (
                  <span onClick={logout} className={classes.signInButton}>
                    Sign Out
                  </span>
                ) : (
                  <Link href='/onboarding' passHref>
                    <span className={classes.signInButton}>Sign In</span>
                  </Link>
                )}
              </li>
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default TopBar;

const useStyles = makeStyles((theme) => ({
  signInButton: {
    color: '#ffffff',
    backgroundColor: '#00368D',
    alignItems: 'center',
    padding: '4px 6px',
    borderRadius: '0.3em',
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    fontWeight: '400',
  },
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
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
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
    cursor: 'pointer',
  },
  navLink: {
    fontFamily: 'IBM Plex Sans',
    textDecoration: 'none',
    color: theme.palette.common.white,
    cursor: 'pointer',
  },
}));
