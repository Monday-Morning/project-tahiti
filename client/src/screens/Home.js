import React from 'react';

// libraries
import { Box, Container, Grid, Card, makeStyles } from '@material-ui/core';

// Components
import ArticleCard from '../components/widgets/ArticleCard';
import Pulse from '../components/widgets/Pulse';
import Squiggles from '../components/widgets/Squiggles';
import FeaturedArticles from '../components/homepage/FeaturedArticles';
import Trending from '../components/homepage/Trending';
import Banner from '../components/homepage/Banner';
import Calendar from '../assets/images/calendar.png';

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Box mt={4}>
          <FeaturedArticles />
        </Box>

        <Box mt={4}>
          <Squiggles />
        </Box>

        <Box mt={4}>
          <Grid container spacing={4}>
            {[0, 1, 2].map((val) => (
              <Grid key={val} item sm={4}>
                <ArticleCard />
              </Grid>
            ))}
            <Grid item sm={8}>
              <Box mt={2}>
                <Pulse />
              </Box>
            </Grid>
            <Grid item sm={4}>
              <Card className={classes.calendar} />
            </Grid>
            {[0, 1, 2].map((val) => (
              <Grid key={val} item sm={4}>
                <ArticleCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Banner />

      <Container>
        <Box mt={4}>
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <Card className={classes.card} />
            </Grid>
            <Grid item sm={6}>
              <Card className={classes.card} />
            </Grid>
          </Grid>

          <Trending />
        </Box>
      </Container>
    </div>
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
