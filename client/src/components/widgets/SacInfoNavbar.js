import React, { useState } from 'react';

import {
  ButtonBase,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import theme from '../../config/themes/light';
import PostHolders from './PostHolder';
import SocietyCards from './SocietyCards';

const STAGE = {
  DSW: 'Dean SW',
  SP: 'SAC President',
  SOB: 'SAC Office Bearers',
};

const POSTS = {
  FMS: [
    {
      position: 'Vice President',
      name: 'Prof. Binod Bihari Sahu',
      phone: '0661-2462782',
      email: 'sahub@nitrkl.ac.in',
    },
    {
      position: 'Vice President',
      name: 'Prof. Kumud Kant Mehta',
      phone: '9492573480',
      email: 'mehtakk@nitrkl.ac.in',
    },
  ],
  LCS: [
    {
      position: 'Vice President',
      name: 'Prof. Sivaraman J.',
      phone: '9492573480',
      email: 'jsiva@nitrkl.ac.in',
    },
    {
      position: 'Vice President',
      name: 'Dr. Winny Routray',
      phone: '',
      email: 'routrayw@nitrkl.ac.in',
    },
  ],
  GSS: [
    {
      position: 'Vice President',
      name: 'Prof. Ramesh Kumar Mohapatra',
      phone: '0661-2462366',
      email: 'mohapatrark@nitrkl.ac.in',
    },
    {
      position: 'Vice President',
      name: 'Dr. Mayank Yadav',
      phone: '',
      email: 'yadavm@nitrkl.ac.in',
    },
  ],
  TS: [
    {
      position: 'Vice President',
      name: 'Dr. Kaustav Chaudhury',
      phone: '0661-2462535 ',
      email: 'chaudhuryk@nitrkl.ac.in',
    },
    {
      position: 'Vice President',
      name: 'Prof. Tirthankar Sarkar',
      phone: '9547960987',
      email: 'sarkart@nitrkl.ac.in',
    },
  ],
};

const SacInfoNavbar = () => {
  const [stage, setStage] = useState(STAGE.DSW);
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const renderTeam = () => {
    switch (stage) {
      case STAGE.DSW:
        return (
          <>
            <PostHolders
              position='Dean SW'
              name='Prof. Sidhartha S. Jena'
              email='dean-sw@nitrkl.ac.in'
            />
          </>
        );
      case STAGE.SP:
        return (
          <>
            <PostHolders
              position='SAC President'
              name='Prof. Rajeev Kumar Panda'
              email='rkpanda@nitrkl.ac.in'
            />
          </>
        );
      case STAGE.SOB:
        return (
          <>
            <SocietyCards society='Film and Music Society' posts={POSTS.FMS} />
            <SocietyCards
              society='Literary and Cultural Society'
              posts={POSTS.LCS}
            />{' '}
            <SocietyCards
              society='Games and Sports Society'
              posts={POSTS.GSS}
            />
            <SocietyCards society='Technical Society' posts={POSTS.TS} />{' '}
          </>
        );
      default:
        return (
          <>
            <SocietyCards society='Film and Music Society' posts={POSTS.FMS} />
            <SocietyCards
              society='Literary and Cultural Society'
              posts={POSTS.LCS}
            />{' '}
            <SocietyCards
              society='Games and Sports Society'
              posts={POSTS.GSS}
            />
            <SocietyCards society='Technical Society' posts={POSTS.TS} />{' '}
          </>
        );
    }
  };

  return (
    <>
      {!matches ? (
        <div className={classes.navbar}>
          {Object.keys(STAGE).map((key, index) => (
            <Typography
              key={key}
              variant='subtitle1'
              className={classes.navItems}
              sx={{
                border:
                  stage === STAGE[key] ? '1px solid #005299' : '1px solid #000',
                borderRadius:
                  index === 0
                    ? '30px 0px 0px 30px'
                    : index === Object.keys(STAGE).length - 1
                    ? '0px 30px 30px 0px'
                    : '0px',
                bgcolor: stage === STAGE[key] && '#005299',
                color: stage === STAGE[key] && '#fff',
              }}
              onClick={() => {
                setStage(STAGE[key]);
              }}
            >
              {STAGE[key]}
            </Typography>
          ))}
        </div>
      ) : (
        <div className={classes.navbarMobile}>
          {Object.keys(STAGE).map((key, index) => (
            <ButtonBase
              key={key}
              type='button'
              className={classes.button}
              sx={{
                bgcolor:
                  stage === STAGE[key]
                    ? '#005299'
                    : theme.palette.primary.blue10,
                color:
                  stage === STAGE[key] ? '#fff' : theme.palette.secondary.main,
              }}
              onClick={() => {
                setStage(STAGE[key]);
              }}
            >
              <span className={classes.label}> {STAGE[key]} </span>
            </ButtonBase>
          ))}
        </div>
      )}

      <Container maxWidth='xm' sx={{ mt: 5 }}>
        <div>{renderTeam()}</div>
      </Container>
    </>
  );
};

export default SacInfoNavbar;

const useStyles = makeStyles(() => ({
  navbar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: '20px',
    marginLeft: '10px',
  },
  navbarMobile: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    borderRadius: '20px',
    marginLeft: '15px',
  },
  label: {
    textTransform: 'capitalize',
    fontFamily: 'SOurce Sans Pro',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '400',
      fontFamily: 'SOurce Sans Pro',
    },
  },
  button: {
    textAlign: 'center',
    borderRadius: '4px',
    margin: '8px 8px 0px 0px',
    padding: '12px 16px',
    [theme.breakpoints.down('md')]: {
      padding: '3px 8px',
    },
    cursor: 'pointer',
    fontSize: '24px',
  },
  navItems: {
    fontSize: '24px',
    fontWeight: 400,
    padding: '5px 20px',
    cursor: 'pointer',
  },
}));
