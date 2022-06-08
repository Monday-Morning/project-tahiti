import React, { useState } from 'react';
import Image from 'next/image';

import makeStyles from '@mui/styles/makeStyles';
import { Typography, Grid } from '@mui/material';

// Component
import Executive from './Executive';
import Member from './Member';

// Placeholder
import { ABOUT } from '../../assets/placeholder/about';

// images
import team from '../../assets/images/about/Team1.png';

const Team = () => {
  const classes = useStyles();
  const [activeBatch, setBatch] = useState(ABOUT.batches[0]);
  const [teamImage, setTeamImage] = useState(team);
  const selectBatch = (batch) => {
    setBatch(batch);
    setTeamImage(team);
  };
  return (
    <div className={classes.wrapper}>
      <Typography variant='h1'>Our Team</Typography>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        className={classes.batchWrapper}
      >
        {ABOUT.batches.map((batch, key) => (
          <Grid item key={key}>
            <div
              className={activeBatch == batch ? classes.active : classes.batch}
              onClick={() => selectBatch(batch)}
            >
              <Typography variant='h3'>{batch}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Image src={teamImage} alt='Team' className={classes.image} />
      <div className={classes.executive}>
        <Executive />
      </div>
      <div className={classes.executive}>
        <Member />
      </div>
    </div>
  );
};

export default Team;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '1280px',
    margin: '40px auto 0px auto',
    [theme.breakpoints.down('lg')]: {
      marginTop: '24px',
      padding: '0px 24px 0px 24px',
    },
  },
  batchWrapper: {
    margin: '32px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '16px 0px',
    },
  },
  batch: {
    backgroundColor: theme.palette.primary.blue10,
    padding: '12px 16px',
    margin: '0px 8px',
    cursor: 'pointer',
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '8px 3px',
      margin: '4px',
    },
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '12px 16px',
    margin: '0px 8px',
    cursor: 'pointer',
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '8px 3px',
      margin: '4px',
    },
  },
  image: {
    margin: '24px 0px',
    width: '100%',
  },
  executive: {
    marginBottom: '24px',
    boxShadow: theme.shadows[0],
    borderRadius: '8px',
  },
}));
