import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// MUI
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';

import makeStyles from '@mui/styles/makeStyles';
import { Container, Typography, TextField } from '@mui/material';

// Utils
import ROUTES from '../../utils/getRoutes';

// Assets
import logoFullBlack from '../../assets/images/logos/logo_full_black.png';

const DesktopNavbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const classes = useStyles({ isSearchActive, isInputActive });

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

  const searchActive = () => {
    setIsInputActive();
    setIsSearchActive((current) => !current);
    console.log(isSearchActive);
  };

  const inputActive = () => {
    setIsInputActive((current) => !current);
  };

  return (
    <>
      <div className={classes.searchMenu}>
        <div className={classes.blackBackground} onClick={searchActive}></div>
        <div className={classes.searchBar}>
          <div className={classes.searchBox}>
            <TextField
              className={classes.searchField}
              id='input-with-icon-textfield'
              placeholder='Search for articles'
              onClick={inputActive}
              color='primary'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant='standard'
            />
            <div className={classes.searchSuggestions}>
              <ul>
                <div className={classes.trendingList}>
                  <li className={classes.trendingHeading}>
                    Innovision Techfest
                  </li>
                </div>
                <div className={classes.trendingList}>
                  <li className={classes.trendingHeading}>Innovision 2019</li>
                </div>
                <div className={classes.trendingList}>
                  <TrendingUpSharpIcon className={classes.trendingSymbol} />
                  <li className={classes.trendingHeading}>Innovision 2021</li>
                </div>
                <div className={classes.trendingList}>
                  <li className={classes.trendingHeading}>
                    Innovsion Post-Fest
                  </li>
                </div>
                <div className={classes.trendingList}>
                  <li className={classes.trendingHeading}>
                    Innovision Pre-Fest
                  </li>
                </div>
                <div className={classes.trendingList}>
                  <TrendingUpSharpIcon className={classes.trendingSymbol} />
                  <li className={classes.trendingHeading}>
                    Innovision Pro-shows
                  </li>
                </div>
              </ul>
            </div>
          </div>

          {/* <div className={classes.trendingArticles}>
            <TrendingUpSharpIcon />
            <h3 className={classes.trendingArticleHeading}>Trending Tags :</h3>
            <h3 className={classes.trendingArticleName}>Departments</h3>
            <h3 className={classes.trendingArticleName}>Clubs</h3>
            <h3 className={classes.trendingArticleName}>SAC</h3>
            <h3 className={classes.trendingArticleName}>Interview</h3>
            <h3 className={classes.trendingArticleName}>Placement</h3>
          </div> */}
        </div>
      </div>
      <Container>
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
              onClick={searchActive}
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
    </>
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
  searchMenu: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    transition: '1s',
    top: '0px',
    opacity: (_) => (_.isSearchActive ? '1' : '0'),
    zIndex: (_) => (_.isSearchActive ? '2001' : '-2001'),
  },
  searchBar: {
    paddingLeft: '120px',
    paddingRight: '120px',
    position: 'absolute',
    display: 'block',
    marginRight: 'auto',
    width: '100%',
    paddingBottom: '20px',
    paddingTop: '60px',
    background: '#FEFEFF',
    zIndex: '2000',
  },
  searchBox: {
    position: 'relative',
  },
  searchField: {
    width: '100%',
    color: theme.palette.primary.blue50,
    paddingBottom: '0px',
  },
  trendingArticles: {
    position: 'absoulte',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20px',
  },
  trendingArticleHeading: {
    paddingLeft: '10px',
    opacity: '0.5',
    zIndex: '2001',
  },
  trendingArticleName: {
    paddingLeft: '10px',
  },
  trendingSymbol: {
    position: 'absolute',
  },
  searchSuggestions: {
    position: 'absolute',
    background: '#FEFEFF',
    width: '100%',
    padding: '20px',
    zIndex: '20022',
    borderRadius: '0px 0px 5px 5px',
    border: '1px #ECEDEC',
    borderStyle: 'none solid solid',
    boxShadow: '0px 0px 5px grey',
    display: (_) => (_.isInputActive ? 'block' : 'none'),
  },
  trendingList: {
    alignItems: 'center',
    paddingBottom: '8px',
    paddingTop: '8px',
  },
  trendingHeading: {
    paddingLeft: '50px',
  },
  blackBackground: {
    position: 'fixed',
    background: '#000',
    width: '100%',
    height: '100vh',
    opacity: '0.7',
  },
}));
