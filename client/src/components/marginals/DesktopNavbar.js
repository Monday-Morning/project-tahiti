import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import makeStyles from '@mui/styles/makeStyles';
import { Container, Typography, TextField } from '@mui/material';

// Utils
import ROUTES from '../../utils/getRoutes';

// Assets
import logoFullBlack from '../../assets/images/logos/logo_full_black.png';

const DesktopNavbar = () => {
  const classes = useStyles();
  const router = useRouter();
  const [search, setSearch] = useState('');

  // console.log(search);

  const searchQuery = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchKeyword = (e) => {
    if (e.key === 'Enter') {
      if (search.length) {
        router.push(`/search?keyword=${search}`, undefined, { shallow: true });
      }
    }
  };

  return (
    <Container maxWidth='xl'>
      <nav
        aria-label='Monday Morning Navigation'
        className={classes.navContainer}
      >
        <div
          aria-label='Details Container'
          className={classes.detailsContainer}
        >
          <div className={classes.imgContainer}>
            <Image
              src={logoFullBlack}
              alt='Monday Morning Logo'
              className={classes.img}
              layout='fill'
              objectFit='cover'
            />
          </div>

          <TextField
            variant='standard'
            label='Search for articles'
            placeholder='Enter related words'
            value={search}
            onKeyDown={searchKeyword}
            onChange={searchQuery}
          />
        </div>

        <ul aria-label='Navbar' className={classes.menuContainer}>
          {ROUTES.CATEGORIES.map(({ name, shortName, path }) => (
            <li key={shortName} className={classes.linkContainer}>
              <Link
                className={classes.link}
                aria-label='Nav Item'
                href={path}
                passHref
              >
                <Typography variant='h2' className={`${classes.menu}`}>
                  {name}
                </Typography>
              </Link>
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
  imgContainer: {
    width: '33%',
    height: 'auto',
    '& > span': {
      position: 'unset !important',
    },
  },
  img: {
    position: 'unset !important',
    width: 'auto !important',
    height: 'auto !important',
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
    cursor: 'pointer',
    height: '100%',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.neutral60,
    cursor: 'pointer',
  },
  menu: {
    textAlign: 'center',
  },
}));
