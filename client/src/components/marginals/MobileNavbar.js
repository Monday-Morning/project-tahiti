import React from 'react';

// libraries
import { NavLink } from 'react-router-dom';
import { BarChart, Search } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';
import { Container, SwipeableDrawer } from '@material-ui/core';

// Assets
import logo from '../../assets/images/logo.png';

// Hooks
import useToggle from '../../hooks/useToggle';

const MobileHeader = () => {
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false);

  const classes = useMobileStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <span
          className={classes.icon}
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role='button'
          tabIndex={0}
        >
          <i>
            <BarChart className={classes.headerIcon} />
          </i>
        </span>
        <img src={logo} alt='Monday Morning' className={classes.logo} />
        <span className={classes.icon}>
          <i>
            <Search />
          </i>
        </span>
      </div>
      <SwipeableDrawer
        anchor='left'
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
      >
        <div className={classes.navList}>
          <div className={classes.navItem}>
            <NavLink
              to='/'
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
            >
              Home
            </NavLink>
          </div>
          <div className={classes.navItem}>
            <NavLink
              to='/campus'
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
            >
              Campus
            </NavLink>
          </div>
          <div className={classes.navItem}>
            <NavLink
              to='/connect'
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
            >
              Connect
            </NavLink>
          </div>
          <div className={classes.navItem}>
            <NavLink
              to='/ddcwc'
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
            >
              DD & CWC
            </NavLink>
          </div>
          <div className={classes.navItem}>
            <NavLink
              to='/career'
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
            >
              Career
            </NavLink>
          </div>
          <div className={classes.navItem}>
            <NavLink
              to='/alumni'
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
            >
              Alumni
            </NavLink>
          </div>
          <div className={classes.navItem}>
            <NavLink
              to='/expressions'
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
            >
              Expressions
            </NavLink>
          </div>
        </div>
      </SwipeableDrawer>
    </Container>
  );
};

export default MobileHeader;

const useMobileStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '1.25rem',
  },
  logo: {
    width: '180px',
    height: 'auto',
  },
  icon: {
    fontSize: '18px',
  },
  headerIcon: {
    transform: 'rotateY(180deg) rotate(-90deg)',
  },
  navList: {
    padding: '2rem',
  },
  navItem: {
    padding: '1rem 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'unset',
  },
}));
