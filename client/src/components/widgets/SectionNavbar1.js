import React, { useState } from 'react';

import { Container, Typography } from '@mui/material';
import theme from '../../config/themes/light';

import makeStyles from '@mui/styles/makeStyles';
import SocietyCards from './SocietyCards';
// import DropDownCard from './DropDownCard';

const STAGE = {
  SOB: 'SAC Office Bearers',
  DNF: 'Dean’s Nominee for Fests',
  DNS: 'Dean’s Nominee for societies',
  FC: 'Fest Convenors',
};

const SectionNavbar1 = () => {
  const [stage, setStage] = useState(STAGE.SOB);
  const classes = useStyles();

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
      <Container maxWidth='xm' sx={{ mt: 5 }}>
        <div>{renderTeam()}</div>
      </Container>
    </>
  );
};

export default SectionNavbar1;

const useStyles = makeStyles(() => ({
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
    padding: '5px 20px',
    cursor: 'pointer',
  },
}));
