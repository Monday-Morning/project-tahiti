import React from 'react';

// libraries
import { Container, Grid, Card, makeStyles } from '@material-ui/core';
import { useQuery } from '@apollo/client';

// Components
import FeaturedArticles from '../components/homepage/FeaturedArticles';
import Squiggles from '../components/widgets/Squiggles';
import ArticleCardStack from '../components/widgets/ArticleCardStack';
import Pulse from '../components/widgets/Pulse';
import Calendar from '../components/homepage/Calendar';
import Banner from '../components/homepage/Banner';
import Trending from '../components/homepage/Trending';
import ActivityIndicator from '../components/shared/ActivityIndicator';

// Queries
import GetIssueByIdQuery from '../graphql/queries/getIssueByID';

function Home() {
  const { loading, error, data } = useQuery(GetIssueByIdQuery, {
    variables: { id: '609566db3fa05a2fdb2f9c6a' },
  });

  const classes = useStyles();
  if (loading && !data) return <ActivityIndicator size={150} />;
  if (error) return <div>{error}</div>;

  const {
    getIssueByID: { articles, featured },
  } = data;

  return (
    <>
      <Container>
        <FeaturedArticles articles={featured} />
        <Squiggles />
        <ArticleCardStack />

        <Grid container spacing={4} style={{ marginTop: 25 }}>
          <Grid item sm={8}>
            <Pulse />
          </Grid>
          <Grid item sm={4}>
            <Calendar />
          </Grid>
        </Grid>

        <ArticleCardStack articles={articles} />
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
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
  },
  calendar: {
    width: '100%',
    height: '100%',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    backgroundImage: `url(${Calendar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
