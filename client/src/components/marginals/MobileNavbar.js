import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Libraries
import { BarChart, Search } from 'react-feather';
import SearchIcon from '@mui/icons-material/Search';
import {
  Container,
  SwipeableDrawer,
  Typography,
  InputAdornment,
  TextField,
} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// Assets
import logoFullDark from '../../assets/images/logos/logo_full_black.png';

// Hooks
import useToggle from '../../hooks/useToggle';

// Utils
import ROUTES from '../../utils/getRoutes';

// TODO: Add signin button to the mobile nav when ready.
const MobileNavbar = () => {
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false);
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const classes = useStyles();

  const searchQuery = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const searchKeyword = (e) => {
    if (e.key === 'Enter') {
      if (searchText.length) {
        router.push(`/search?keyword=${searchText}`, undefined, {
          shallow: true,
        });
      }
    }
  };

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

        <div className={classes.logoContainer}>
          <Image
            src={logoFullDark}
            alt='Monday Morning Logo'
            className={classes.logo}
            layout='fill'
            objectFit='cover'
          />
        </div>

        <Search
          className={classes.searchIcon}
          onClick={() => setSearch(!search)}
          onKeyDown={() => {}}
          role='button'
          tabIndex={0}
          size={30}
        />
      </Container>
      {search && (
        <Container>
          <TextField
            id='search-textfield'
            value={searchText}
            onKeyDown={searchKeyword}
            onChange={searchQuery}
            className={classes.searchField}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant='standard'
          />
        </Container>
      )}

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
            <Link
              key={shortName}
              href={path}
              passHref
              className={classes.navLink}
              exact
              activeClassName={classes.activeHeaderLink}
              onClick={toggleMenu}
            >
              <Typography variant='h3' className={classes.typography}>
                {name}
              </Typography>
            </Link>
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
  logoContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    width: '40%',
    height: 'auto',
    '& > div': {
      position: 'unset !important',
    },
    '& > span': {
      position: 'unset !important',
    },
  },
  logo: {
    position: 'unset !important',
    width: 'auto !important',
    height: 'auto !important',
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
    cursor: 'pointer',
    color: theme.palette.secondary.neutral70,
  },
  searchField: {
    width: '100%',
    marginTop: 10,
  },
  activeHeaderLink: {},
}));
