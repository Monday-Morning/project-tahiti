import React, { useState } from 'react';

// Libraries
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Table,
  LinearProgress,
  TableHead,
  TableBody,
} from '@material-ui/core';
import { Heart, PlayCircle, Volume2 } from 'react-feather';

// Components
import { PODCAST } from '../../assets/placeholder/podcast';

// Images
import podcastCover from '../../assets/images/podcast_cover.png';

const PodcastList = () => {
  const Podcast = PODCAST;
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <Table>
          <TableHead>
            <tr className={classes.headerRow}>
              <th></th>
              <th>Title</th>
              <th>Tags</th>
              <th>Time</th>
              <th>Favorite</th>
            </tr>
          </TableHead>
          <TableBody>
            {Podcast.map((podcast, key) => {
              return (
                <tr key={key} className={classes.ListRow}>
                  <td>
                    <PlayCircle />
                  </td>
                  <td>{podcast.title}</td>
                  <td>
                    {podcast.tags.map((tag, key, podcast) => {
                      if (key === podcast.length - 1) {
                        return <span key={key}> {tag} </span>;
                      } else {
                        return <span key={key}> {tag}, </span>;
                      }
                    })}
                  </td>
                  <td>{podcast.duration}</td>
                  <td>
                    <Heart size={18} />
                  </td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className={classes.podPlayer}>
        <Grid container alignItems='center'>
          <Grid item sm={2}>
            <div className={classes.icons}>
              <i className='fas fa-step-backward'></i>
              <i className={`fa fa-play ${classes.playIcon}`}></i>
              <i className='fas fa-step-forward'></i>
            </div>
          </Grid>

          <Grid item sm={3}>
            <Grid container>
              <Grid item xs={3} className={classes.podcastCoverImage}>
                <img src={podcastCover} alt='cover' />
              </Grid>
              <Grid item xs={9}>
                <Typography variant='body1'>Interview-01</Typography>
                <Typography variant='body2'>ft. Rama Krushna Behera</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={6}>
            <div className={classes.progressWrapper}>
              <span>01:59</span>
              <LinearProgress
                className={classes.progress}
                variant='determinate'
                value={50}
              />
              <span>03:29</span>
              <span>
                <Volume2 />
              </span>
            </div>
          </Grid>

          <Grid item sm={1} className={classes.LikeIcon}>
            <Heart />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default PodcastList;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '2rem',
    padding: '1.5rem',
  },
  headerRow: {
    '& th': {
      padding: '0.75rem',
    },
  },
  ListRow: {
    textAlign: 'center',
    borderRadius: '40px',
    backgroundColor: theme.palette.secondary.neutral30,
    '& td': {
      padding: '0.75rem',
    },
  },
  podPlayer: {
    marginBottom: '4rem',
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: '0.75rem 3rem',
  },
  icons: {
    display: 'flex',
    fontSize: '18px',
    color: theme.palette.secondary.neutral60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: '24px',
    color: theme.palette.common.white,
  },
  podcastCoverImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  LikeIcon: {
    textAlign: 'center',
  },
  progressWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& span': {
      marginLeft: '1rem',
      marginRight: '1rem',
    },
  },
  progress: {
    width: '90%',
  },
}));
