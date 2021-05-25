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
// import GetIssueByIdQuery from '../graphql/queries/getIssueByID';
import GetLatestIssue from '../graphql/queries/getLatestIssue';

function Home() {
  const { loading, error, data } = useQuery(GetLatestIssue, {
    variables: { limit: 3 },
  });

  if (loading && !data) return <ActivityIndicator size={150} />;
  if (error) return <div>{JSON.stringify(error)}</div>;

  const { listIssues: issues } = data;

  const latestIssue = issues[0];
  const secondLatestIssue = issues[1];

  const { featured } = latestIssue;
  let firstArticleStack;
  let secondArticleStack;

  // Logic to determine the content of First and Second article stack from the 2 latest issues
  if (latestIssue.articles.length > 0 && latestIssue.articles.length < 3) {
    firstArticleStack = secondLatestIssue.featured.slice(0, 3);
    secondArticleStack = [
      ...secondLatestIssue.featured.slice(3, 5),
      secondLatestIssue.articles[0],
    ];
  } else if (
    latestIssue.articles.length >= 3 &&
    latestIssue.articles.length < 6
  ) {
    firstArticleStack = latestIssue.articles.slice(0, 3);
    secondArticleStack = secondLatestIssue.featured.slice(0, 3);
  } else {
    firstArticleStack = latestIssue.articles.slice(0, 3);
    secondArticleStack = latestIssue.articles.slice(3, 6);
  }

  return (
    <>
      <Container>
        <FeaturedArticles articles={featured} />
        <Squiggles />
        <ArticleCardStack articleList={firstArticleStack} />

        <Grid container spacing={4} style={{ marginTop: 25 }}>
          <Grid item sm={8}>
            <Pulse />
          </Grid>
          <Grid item sm={4}>
            <Calendar />
          </Grid>
        </Grid>

        <ArticleCardStack articleList={secondArticleStack} />
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
