import React from 'react';

// libraries
import { NavLink } from 'react-router-dom';
import { BarChart } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';
import { Container, SwipeableDrawer } from '@material-ui/core';
// import {Search} from 'react-feather'

// Assets
import logo from '../../assets/images/logo.png';

// Hooks
import useToggle from '../../hooks/useToggle';

// TODO: Add signin button to the mobile nav when ready.
const MobileHeader = ({ nav }) => {
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
          {/* Disabled until proper functionality ready */}
          {/* <i>
            <Search />
          </i> */}
        </span>
      </div>

      <SwipeableDrawer
        anchor='left'
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
      >
        <div className={classes.navList}>
          {nav.map(({ to, name }) => (
            <div key={name} className={classes.navItem}>
              <NavLink
                to={to}
                className={classes.navLink}
                exact
                activeClassName={classes.activeHeaderLink}
              >
                {name}
              </NavLink>
            </div>
          ))}
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
    position: 'relative',
  },
  logo: {
    width: '180px',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    fontFamily: 'IBM Plex Sans',
  },
}));
