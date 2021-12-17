import React, { useState } from 'react';
import Image from 'next/image';
// Libraries
import { Container, makeStyles, Typography, Grid } from '@material-ui/core';
import { Bookmark, Share2, Clock } from 'react-feather';

// Components
import { PODCAST } from '../../assets/placeholder/podcast';

// Images
import podcastImage from '../../assets/images/podcast.png';

const LatestPodcast = () => {
  const [status, setStatus] = useState(false);
  const podcast = PODCAST[0];
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.wrapper}>
        <Typography variant='h1' className={classes.heading}>
          Podcast
        </Typography>

        <Grid container className={classes.podWrapper}>
          <Grid item sm={3} className={classes.imageWrapper}>
            <div className={classes.Status} onClick={() => setStatus(!status)}>
              {status ? (
                <i className='fas fa-pause'></i>
              ) : (
                <i className='fas fa-play'></i>
              )}
            </div>
            <Image
              className={classes.podcastImage}
              src={podcastImage}
              alt='podcast Image'
            />
          </Grid>

          <Grid item sm={9} className={classes.Details}>
            <div className={classes.titleWrapper}>
              <div className={classes.title}>
                <Typography variant='h2'>{podcast.title}</Typography>
              </div>

              <div className={classes.iconWrapper}>
                <span className={classes.utilityIcon}>
                  <Share2 size={18} />
                </span>
                <span className={classes.utilityIcon}>
                  <Bookmark size={18} />
                </span>
              </div>
            </div>

            <Typography variant='body2' className={classes.authors}>
              {podcast.authors.map((author, key, podcast) => {
                {
                  key === podcast.length - 1 ? (
                    <span key={key}> {author} </span>
                  ) : (
                    <span key={key}> {author}, </span>
                  );
                }
              })}
            </Typography>

            <div className={classes.duration}>
              <i className='far fa-clock'></i>
              {podcast.duration}
            </div>

            <div className={classes.description}>{podcast.description}</div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default LatestPodcast;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '2.25rem',
  },
  heading: {
    color: theme.palette.primary.blue60,
  },
  podWrapper: {
    marginTop: '2rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  imageWrapper: {
    position: 'relative',
  },
  Status: {
    display: 'flex',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem 0 0 0.5rem',
    fontSize: '50px',
  },
  podcastImage: {
    borderRadius: '0.5rem 0 0 0.5rem',
    width: '100%',
    height: '100%',
    objecFit: 'cover',
  },
  Details: {
    padding: '2rem 1.5rem',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  utilityIcon: {
    marginLeft: '2rem',
    fontSize: '18px',
  },
  authors: {
    color: theme.palette.secondary.neutral60,
    marginTop: '0.25rem',
  },
  duration: {
    marginTop: '1rem',
    '& i': {
      marginRight: '10px',
    },
  },
  description: {
    marginTop: '1.5rem',
    textAlign: 'justify',
  },
}));
