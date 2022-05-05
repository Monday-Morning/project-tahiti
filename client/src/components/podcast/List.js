import React, { useState } from 'react';
import Image from 'next/image';

// Libraries
import { Container, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Table, TableHead, TableBody } from '@mui/material';
import { Heart, PlayCircle } from 'react-feather';

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
        <Paper>
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
        </Paper>
      </div>

      <div>
        <iframe
          src='https://open.spotify.com/embed/episode/7zq8d36zXutK0XXU5xp8kO?utm_source=generator'
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
    },
    '& td:nth-child(2)': {
      textAlign: 'start',
    },
    '& td:nth-child(3)': {
      textAlign: 'start',
    },
  },
}));
