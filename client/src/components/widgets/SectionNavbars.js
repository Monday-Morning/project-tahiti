import React, { useState } from 'react';

import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ClubCards from '../widgets/ClubCards';

const STAGE = {
  FM: 'Film and Music',
  GS: 'Games and Sports',
  LC: 'Literary and Cultural',
  T: 'Technical',
};

const SectionNavbars = () => {
  const [stage, setStage] = useState(STAGE.FM);
  const classes = useStyles();

  const renderTeam = () => {
    switch (stage) {
      case STAGE.FM:
        return <ClubCards />;
      case STAGE.GS:
        return <ClubCards />;
      case STAGE.LC:
        return <ClubCards />;
      case STAGE.T:
        return <ClubCards />;
      default:
        return <ClubCards />;
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

export default SectionNavbars;

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
    padding: '5px 50px',
    cursor: 'pointer',
  },
}));
