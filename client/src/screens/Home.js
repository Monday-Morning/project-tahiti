/* eslint-disable no-unused-vars */
import React from 'react';

// libraries
import { Container, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';

// Components
import FeaturedArticles from '../components/homepage/FeaturedArticles';
import Squiggles from '../components/widgets/Squiggles';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import Pulse from '../components/widgets/Pulse';
import Calendar from '../components/homepage/Calendar';
import Banner from '../components/homepage/Banner';
import Trending from '../components/homepage/Trending';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import SocialMedia from '../components/homepage/SocialMedia';

// Queries
import GetIssueByIdQuery from '../graphql/queries/getIssueByID';

function Home() {
  const { loading, error, data } = useQuery(GetIssueByIdQuery, {
    variables: { id: '60a5913ec5df3a6218fa8336' },
  });

  if (loading && !data) return <ActivityIndicator size={150} />;
  if (error) return <div>{JSON.stringify(error)}</div>;

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
        <SocialMedia />
        <Trending />
      </Container>
    </>
  );
}

export default Home;
