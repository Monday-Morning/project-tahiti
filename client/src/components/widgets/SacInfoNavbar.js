import React, { useState } from 'react';
import {
  ButtonBase,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import theme from '../../config/themes/light';

import makeStyles from '@mui/styles/makeStyles';
import SocietyCards from './SocietyCards';

const STAGE = {
  SOB: 'SAC Office Bearers',
  DNF: 'Dean’s Nominee for Fests',
  DNS: 'Dean’s Nominee for societies',
  FC: 'Fest Convenors',
};

const SacInfoNavbar = () => {
  const [stage, setStage] = useState(STAGE.SOB);
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const renderTeam = () => {
    switch (stage) {
      case STAGE.SOB:
        return (
          <>
            <SocietyCards society='Film and Music Society' />
            <SocietyCards society='Literary and Cultural Society' />{' '}
            <SocietyCards society='Games and Sports Society' />
            <SocietyCards society='Technical Society' />{' '}
          </>
        );
      case STAGE.DNF:
        return (
          <>
            <SocietyCards society='Film and Music Society' />
            <SocietyCards society='Literary and Cultural Society' />
            <SocietyCards society='Games and Sports Society' />
            <SocietyCards society='Technical Society' />{' '}
          </>
        );
      case STAGE.DNS:
        return (
          <>
            <SocietyCards society='Film and Music Society' />
            <SocietyCards society='Literary and Cultural Society' />{' '}
            <SocietyCards society='Games and Sports Society' />
            <SocietyCards society='Technical Society' />{' '}
          </>
        );
      case STAGE.FC:
        return (
          <>
            <SocietyCards society='Film and Music Society' />
            <SocietyCards society='Literary and Cultural Society' />{' '}
            <SocietyCards society='Games and Sports Society' />
            <SocietyCards society='Technical Society' />{' '}
          </>
        );
      default:
        return (
          <>
            <SocietyCards society='Film and Music Society' />
            <SocietyCards society='Literary and Cultural Society' />{' '}
            <SocietyCards society='Games and Sports Society' />
            <SocietyCards society='Technical Society' />{' '}
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
