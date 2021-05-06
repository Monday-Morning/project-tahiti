import React, { useState } from 'react';

// libraries
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Container,
  TextField,
  SwipeableDrawer,
} from '@material-ui/core';
import theme from '../../config/themes/light';
import { BarChart, Search } from 'react-feather';

// images
import logo from '../../assets/images/logo.png';

const DeskTopHeader = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <Grid container className={classes.header}>
          <Grid item sm={6}>
            <img src={logo} alt='Monday Morning' />
          </Grid>
          <Grid item sm={6}>
            <div className={classes.searchWrapper}>
              <TextField label='Search for articles' />
              <Button
                variant='outlined'
                color='primary'
                className={classes.signInButton}
              >
                Sign In
              </Button>
            </div>
          </Grid>
        </Grid>
        <hr />
        <div className={classes.navbar}>
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
                DD {'&'} CWC
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
        </div>
      </div>
    </Container>
  );
};

const MobileHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const classes = useMobileStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <span
          className={classes.icon}
          onClick={() => setToggleMenu(!toggleMenu)}
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
        open={toggleMenu}
        onClose={() => setToggleMenu(false)}
        onOpen={() => setToggleMenu(true)}
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
              DD {'&'} CWC
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

const Header = () => {
  let matches = useMediaQuery(theme.breakpoints.up('md'));
  if (matches) {
    return <DeskTopHeader />;
  } else {
    return <MobileHeader />;
  }
};
export default Header;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '15px',
  },
  header: {
    paddingTop: '24px ',
    paddingBottom: '24px',
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signInButton: {
    alignItems: 'center',
    margin: 'auto 0 0 70px',
  },
  navbar: {
    position: 'relative',
    width: '100%',
  },
  navList: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  navItem: {
    width: 'auto',
  },
  navLink: {
    fontFamily: 'IBM Plex Sans',
    textDecoration: 'none',
    color: '#999999',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '32px',
  },
  activeHeaderLink: {
    color: theme.palette.primary.blue50,
  },
}));
const useMobileStyles = makeStyles((theme) => ({
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
