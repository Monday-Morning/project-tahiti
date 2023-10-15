import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// MUI
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import makeStyles from '@mui/styles/makeStyles';
import {
  Container,
  Typography,
  TextField,
  ButtonBase,
  Fade,
} from '@mui/material';
// import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';

// Utils
import ROUTES from '../../utils/getRoutes';
import NewTabLink from '../shared/links/NewTabLink';
import getArticleLink from '../../utils/getArticleLink';
import { authContext } from '../../context/AuthContextProvider';

// Assets
import logoFullBlack from '../../assets/images/logos/logo_full_black.png';

//hooks
import useAutoComplete from '../../hooks/useAutoComplete';

//components
import UserAvatar from '../widgets/UserAvatar';

const DesktopNavbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const inputRef = useRef(null);
  const classes = useStyles({ isSearchActive });
  const { user } = useContext(authContext);
  const autoCompleteData = useAutoComplete(search, 10);

  useEffect(() => {
    if (isSearchActive) {
      inputRef.current.focus();
    }
  }, [isSearchActive]);

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
    setIsSearchActive((current) => !current);
  };

  return (
    <>
      <Fade in={isSearchActive} timeout={1000} mountOnEnter unmountOnExit>
        <div className={classes.searchMenu}>
          <div className={classes.blackBackground} onClick={searchActive}></div>
          <div className={classes.searchBar}>
            <div className={classes.searchBox}>
              <TextField
                className={classes.searchField}
                id='input-with-icon-textfield'
                placeholder='Search for articles'
                value={search}
                onKeyDown={searchKeyword}
                onChange={searchQuery}
                inputRef={inputRef}
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
                {search.length > 0 &&
                  autoCompleteData?.map(({ id, title }) => (
                    <div key={id} className={classes.trendingList}>
                      <NewTabLink to={getArticleLink(id, title)}>
                        {title}
                      </NewTabLink>
                    </div>
                  ))}
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
      </Fade>
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
            <div className={classes.searchAndSign}>
              <TextField
                variant='standard'
                label='Search for articles'
                placeholder='Enter related words'
                onClick={searchActive}
                disabled={true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <div className={classes.signIn}>
                {user ? (
                  <div className={classes.avatar}>
                    <UserAvatar
                      picture={user.photoURL}
                      name={user.displayName}
                    />
                  </div>
                ) : (
                  <Link href='/onboarding' passHref>
                    <ButtonBase type='button' className={classes.button}>
                      <span className={classes.label}> Sign In </span>
                    </ButtonBase>
                  </Link>
                )}
              </div>
            </div>
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
                  <Typography variant='h3' className={`${classes.menu}`}>
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
  button: {
    textAlign: 'center',
    borderRadius: '4px',
    border: 'solid black 0.5px',
    margin: '8px 8px 0px 0px',
    padding: '10px 20px',
  },
  avatar: {
    marginRight: '20px',
  },
  label: {
    fontFamily: 'Source Sans Pro',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '1.2rem',
    textDecoration: 'none',
    color: theme.palette.secondary.main,
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
  searchAndSign: {
    display: 'flex',
    alignItems: 'center',
  },
  signIn: {
    paddingLeft: '30px',
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
    top: '0px',
    zIndex: '2001',
  },
  searchBar: {
    paddingLeft: '120px',
    paddingRight: '120px',
    position: 'absolute',
    display: 'block',
    marginRight: 'auto',
    width: '100%',
    paddingBottom: '20px',
    paddingTop: '70px',
    background: '#FEFEFF',
    zIndex: '2000',
  },
  searchBox: {
    position: 'relative',
  },
  searchField: {
    width: '100%',
    color: theme.palette.primary.blue50,
    '& input': {
      paddingLeft: '20px',
    },
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
  searchSuggestions: {
    position: 'absolute',
    background: '#FEFEFF',
    width: '100%',
    zIndex: '20022',
    borderRadius: '0px 0px 5px 5px',
    border: '1px #ECEDEC',
    borderStyle: 'none solid solid',
    boxShadow: '0px 0px 5px grey',
    display: (_) => (_.isSearchActive ? 'block' : 'none'),
    paddingLeft: '20px',
  },
  trendingList: {
    fontFamily: theme.typography.fontFamily,
    alignItems: 'center',
    paddingBottom: '12px',
    paddingTop: '8px',
    cursor: 'pointer',
  },
  blackBackground: {
    position: 'fixed',
    background: '#000',
    width: '100%',
    height: '100vh',
    opacity: '0.7',
  },
}));
