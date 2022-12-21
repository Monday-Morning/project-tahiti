import React, { useState } from 'react';
import Image from 'next/image';
import theme from '../../config/themes/light';

// Libraries
import { Container, Paper, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Table, TableHead, TableBody } from '@mui/material';
import { Heart, PlayCircle } from 'react-feather';

// Components
import { PODCAST } from '../../assets/placeholder/podcast';

// Images
import podcastCover from '../../assets/images/podcast_cover.png';

const PodcastList = ({ spotify }) => {
  const Podcast = PODCAST;
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <Paper>
          <Table>
            <TableHead>
              <tr className={classes.headerRow}>
                <th></th>
                <th>Title</th>
                <th>Time</th>
                <th>Fav</th>
              </tr>
            </TableHead>
            <TableBody>
              {Podcast.map((podcast, key) => {
                return (
                  <tr key={key} className={classes.ListRow}>
                    <td>
                      <PlayCircle />
                    </td>
                    <td>
                      {podcast.title.substring(
                        0,
                        smallScreen ? 10 : mediumScreen ? 50 : 80,
                      )}
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
        </Paper>
      </div>

      <div>
        <iframe
          // src={`https://open.spotify.com/embed/episode/${spotify[0].id}`}
          width='100%'
          height='152'
          frameBorder='0'
          allowFullScreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
      </div>
    </Container>
  );
};
export default PodcastList;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: '2rem 0 2rem 0',
    borderRadius: '0.7rem',
  },
  headerRow: {
    '& th': {
      fontWeight: '600',
      fontFamily: 'Source Sans Pro',
      fontSize: '1.5rem',
      textAlign: 'center',
      padding: '0.75rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
    '& th:nth-child(2)': {
      textAlign: 'start',
    },
    '& th:nth-child(3)': {
      textAlign: 'start',
    },
  },
  ListRow: {
    fontWeight: '400',
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.neutral30,
    '& td': {
      padding: '0.75rem',
    },
    '& td:nth-child(1)': {
      position: 'absolute',
      botton: '0rem',
      marginTop: '0.1rem',
    },
    '& td:nth-child(2)': {
      textAlign: 'start',
    },
    '& td:nth-child(3)': {
      textAlign: 'start',
    },
  },
}));
