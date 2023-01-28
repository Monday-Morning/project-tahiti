import React, { useEffect, useState } from 'react';

// Libraries
import { Container, Paper, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Table, TableHead, TableBody } from '@mui/material';
import { Heart, PlayCircle } from 'react-feather';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from 'next/router';

const PodcastList = ({ spotify, pageNo, len, hidePagination }) => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(spotify[0].id);
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  const { push } = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [nextPageNo, setNextPageNo] = useState(pageNo);

  useEffect(() => {
    if (isLoading ?? true === true) {
      setLoading((_val) => false);
      return;
    }

    setLoading((_val) => true);

    push(`/expressions/podcasts/${nextPageNo}`);

    setLoading(false);
  }, [nextPageNo]);

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
              {spotify.map((podcast, key) => {
                return (
                  <tr
                    key={key}
                    className={classes.ListRow}
                    onClick={() => {
                      setCurrentId(spotify[key].id);
                    }}
                  >
                    <td>
                      <PlayCircle />
                    </td>
                    <td>
                      <div className={classes.podcastTitle}>{podcast.name}</div>
                    </td>
                    <td>{millisToMinutesAndSeconds(podcast.duration_ms)}</td>
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
          src={`https://open.spotify.com/embed/episode/${currentId}`}
          width='100%'
          height='152'
          frameBorder='0'
          allowFullScreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
      </div>
      {!hidePagination ? (
        <div className={classes.pagination}>
          {nextPageNo != 1 ? (
            <>
              <Typography onClick={() => setNextPageNo(nextPageNo - 1)}>
                Previous
              </Typography>
              <ChevronLeftIcon onClick={() => setNextPageNo(nextPageNo - 1)} />
            </>
          ) : null}

          {len != 0 ? (
            <>
              <ChevronRightIcon onClick={() => setNextPageNo(nextPageNo + 1)} />
              <Typography onClick={() => setNextPageNo(nextPageNo + 1)}>
                Next
              </Typography>
            </>
          ) : null}
        </div>
      ) : null}
    </Container>
  );
};
export default PodcastList;

const useStyles = makeStyles((theme) => ({
  pagination: {
    '&:hover': {
      cursor: 'pointer',
    },
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    maxWidth: '90vw',
  },
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

    backgroundColor: theme.palette.common.white,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.secondary.neutral30,
      borderRadius: '40px',
    },
    '& td': {
      padding: '0.75rem',
    },

    '& td:nth-child(1)': {
      position: 'absolute',
      botton: '0rem',
      marginTop: '0.1rem',
    },
    '& td:nth-child(3)': {
      textAlign: 'start',
    },
  },
  podcastTitle: {
    fontWeight: '400',
    marginLeft: '0.3rem',
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    textAlign: 'start',
    textOverflow: 'ellipsis',
    lineClamp: '1',
    boxOrient: 'vertical',
    display: '-webkit-box',
    overflow: 'hidden',
  },
}));
