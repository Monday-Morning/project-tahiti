import React from 'react';

// Libraries
import { NavLink } from 'react-router-dom';
import { BarChart, Search } from 'react-feather';
import {
  Container,
  SwipeableDrawer,
  makeStyles,
  Typography,
} from '@material-ui/core';

// Assets
import logoFullDark from '../../assets/images/logos/logo_full_black.png';

// Hooks
import useToggle from '../../hooks/useToggle';

// Utils
import ROUTES from '../../utils/getRoutes';

// TODO: Add signin button to the mobile nav when ready.
const MobileNavbar = ({ nav }) => {
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false);
  const classes = useStyles();

  return (
    <>
      <Container className={classes.header}>
        {/* {!isMenuOpen && ( */}
        <BarChart
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role='button'
          tabIndex={0}
          className={classes.menuIcon}
          size={30}
        />
        {/* )} */}

        <img
          src={logoFullDark}
          alt='Monday Morning Logo'
          className={classes.logo}
        />

        <Search
          className={classes.searchIcon}
          onClick={() => {}}
          onKeyDown={() => {}}
          role='button'
          tabIndex={0}
          size={30}
        />
      </Container>

      <SwipeableDrawer
        anchor='left'
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
        swipeAreaWidth={50}
        style={{ zIndex: 10001 }}
      >
        <nav className={classes.navContainer} aria-label='Navigation Container'>
          {ROUTES.CATEGORIES.map(({ name, shortName, path }) => (
            <NavLink
              key={shortName}
              to={path}
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
              onClick={toggleMenu}
            >
              <Typography variant='h3' className={classes.typography}>
                {name}
              </Typography>
            </NavLink>
          ))}
        </nav>
      </SwipeableDrawer>
    </>
  );
};

export default MobileNavbar;

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    marginBottom: '10px',
    marginTop: '20px',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    position: 'relative',
  },
  menuIcon: {
    transform: 'rotateY(180deg) rotate(-90deg)',
    zIndex: 10000,
  },
  logo: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',

    width: '40%',
    height: 'auto',
  },

  swipeableDrawer: {
    zIndex: 10001,
  },
  navContainer: {
    width: '200px',
    height: 'auto',
    minHeight: '40vh',

    marginTop: '60px',
    zIndex: 10001,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  navLink: {
    width: '100%',
    padding: '20px',
    textDecoration: 'none',
    color: theme.palette.secondary.neutral70,
  },
  activeHeaderLink: {},
}));
