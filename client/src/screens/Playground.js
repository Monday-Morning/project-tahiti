import React from 'react';
import Image from '../components/shared/image/Image';
import { makeStyles, Typography } from '@material-ui/core';

// import src1 from 'https://mondaymorning.nitrkl.ac.in/uploads/media/WhatsApp%20Image%202020-10-05%20at%2000.32.29%20%282%29.jpeg';
import src2 from '../assets/images/instagram/insta4.jpeg';
import src3 from '../assets/images/instagram/insta5.jpeg';

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src={'https://mondaymorning.nitrkl.ac.in/uploads/media/DD.jpg'} />
      <Image src={src3} />
      <Image
        src={
          'https://mondaymorning.nitrkl.ac.in/uploads/media/Instagram%20post%20-%201%20%285%29-compressed.jpg'
        }
      />
      <Image src={'https://mondaymorning.nitrkl.ac.in/uploads/media/ssc.png'} />
      <div className={classes.one}>
        <h1 className={classes.h1}>This is H1 text</h1>
        <h2 className={classes.h2}>This is H2 text</h2>
        <h3 className={classes.h3}>This is H3 text</h3>
        {/* <h4 className={classes.h4}>This is H4 text</h4> */}
        <p className={classes.body1}>This is Body1 text</p>
        <p className={classes.body2}>This is Body2 text</p>
      </div>
      <div className={classes.one}>
        <Typography variant='h1'>This is H1 text</Typography>
        <Typography variant='h2'>This is H1 text</Typography>
        <Typography variant='h3'>This is H1 text</Typography>
        <Typography variant='body1'>This is H1 text</Typography>
        <Typography variant='body2'>This is H1 text</Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    // display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  one: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
  },
  h1: {
    fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: '3rem',
    '@media (max-width:600px)': {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
  },
  h2: {
    fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '2rem',
    '@media (max-width:600px)': {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
  },
  h3: {
    fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    '@media (max-width:600px)': {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
    },
  },
  // h4: {
  //   fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
  //   fontWeight: 600,
  //   fontSize: '2rem',
  //   lineHeight: '3rem',
  //   '@media (max-width:600px)': {
  //     fontSize: '1.5rem',
  //     lineHeight: '3rem',
  //   },
  // },
  body1: {
    fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    '@media (max-width:600px)': {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
    },
  },
  body2: {
    fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.25rem',
    '@media (max-width:600px)': {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
  },
}));
