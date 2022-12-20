import React, { useState } from 'react';
import { Container, Typography, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import theme from '../../config/themes/light';
import { ButtonBase } from '@mui/material';

import ClubCards from './ClubCards';

const STAGE = {
  FM: 'Film and Music',
  GS: 'Games and Sports',
  LC: 'Literary and Cultural',
  T: 'Technical',
};

const SectionNavbars = () => {
  const [stage, setStage] = useState(STAGE.FM);
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const renderTeam = () => {
    switch (stage) {
      case STAGE.FM:
        return <ClubCards key={stage} category='FM' />;
      case STAGE.GS:
        return <ClubCards key={stage} category='GS' />;
      case STAGE.LC:
        return <ClubCards key={stage} category='LC' />;
      case STAGE.T:
        return <ClubCards key={stage} category='T' />;
      default:
        return <ClubCards key={stage} category='FM' />;
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

export default SectionNavbars;

const useStyles = makeStyles((theme) => ({
  navbarMobile: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: '20px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft:'20px'
  },
  label: {
    textTransform: 'capitalize',
    fontFamily: 'SOurce Sans Pro',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '400',
      fontFamily: theme.typography.fontFamily,
      lineHeight: '1.5rem',
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
  subCategory: {
    whiteSpace: 'nowrap',
    fontSize: '20px',
  },
  navbar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: '20px',
  },
  navItems: {
    fontSize: '24px',
    fontWeight: 400,
    padding: '5px 50px',
    cursor: 'pointer',
  },
}));

