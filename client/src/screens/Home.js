import React from 'react';

// libraries
import { Box, Container, Grid, Card, makeStyles } from '@material-ui/core';

// Components

import FeaturedArticles from '../components/homepage/FeaturedArticles';
import Squiggles from '../components/widgets/Squiggles';
import ArticleCardStack from '../components/widgets/ArticleCardStack';
import Pulse from '../components/widgets/Pulse';
import Calendar from '../assets/images/calendar.png';
import Banner from '../components/homepage/Banner';
import Trending from '../components/homepage/Trending';

function Home() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <FeaturedArticles />
        <Squiggles />
        <ArticleCardStack />

        <Grid container spacing={4} style={{ marginTop: 25 }}>
          <Grid item sm={8}>
            <Box mt={2}>
              <Pulse />
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Card className={classes.calendar} />
          </Grid>
        </Grid>

        <ArticleCardStack />
      </Container>

      <Banner />

      <Container style={{ marginTop: 35 }}>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Card className={classes.card} />
          </Grid>
          <Grid item sm={6}>
            <Card className={classes.card} />
          </Grid>
        </Grid>

        <Trending />
      </Container>
    </>
  );
}

export default Home;

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    height: '100%',
    minHeight: '600px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
  },
  calendar: {
    width: '100%',
    height: '100%',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    backgroundImage: `url(${Calendar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
