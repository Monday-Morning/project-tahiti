import React, { useState } from 'react';

// Libraries
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField } from '@material-ui/core';

// Utils
import ROUTES from '../../utils/getRoutes';

// Assets
import logoFullBlack from '../../assets/images/logos/logo_full_black.png';

const DesktopNavbar = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  return (
    <Container>
      <nav
        aria-label='Monday Morning Navigation'
        className={classes.navContainer}
      >
        <div
          aria-label='Details Container'
          className={classes.detailsContainer}
        >
          <img
            src={logoFullBlack}
            alt='Monday Morning Logo'
            className={classes.img}
          />

          <TextField
            label='Search for articles'
            placeholder='Enter related words'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <ul aria-label='Navbar' className={classes.menuContainer}>
          {ROUTES.CATEGORIES.map(({ name, shortName, path }) => (
            <li key={shortName} className={classes.linkContainer}>
              <NavLink className={classes.link} aria-label='Nav Item' to={path}>
                <Typography variant='h2' className={`${classes.menu}`}>
                  {name}
                </Typography>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default DesktopNavbar;

const useStyles = makeStyles((theme) => ({
  navContainer: {
    width: '100%',
    marginTop: '10px',
  },

  detailsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingTop: '10px',
    paddingBottom: '25px',
    borderBottom: `3px solid ${theme.palette.secondary.neutral50}`,
  },
  img: {
    width: '33%',
    height: 'auto',
  },

  menuContainer: {
    width: '100%',
    marginTop: '20px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkContainer: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.neutral60,
  },
  menu: {
    textAlign: 'center',
  },
}));
