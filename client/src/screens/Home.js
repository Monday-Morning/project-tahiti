import React from 'react';

// libraries
import { Container } from '@material-ui/core';
import { useQuery } from '@apollo/client';

// Components
import Squiggles from '../components/widgets/Squiggles';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
// import Pulse from '../components/widgets/Pulse';
// import Calendar from '../components/homepage/Calendar';
import Banner from '../components/homepage/Banner';
import Trending from '../components/homepage/Trending';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import SocialMedia from '../components/homepage/SocialMedia';
import ArticleGrid from '../components/widgets/article/ArticleGrid';

// Queries
import GetLatestIssues from '../graphql/queries/homepage/getLatestIssues';
import getLatestSquiggle from '../graphql/queries/homepage/getLatestSquiggle';

function Home() {
  const { loading, error, data } = useQuery(GetLatestIssues, {
    variables: { limit: 3 },
  });

  const {
    loading: squigglesLoading,
    error: squigglesError,
    data: squigglesData,
  } = useQuery(getLatestSquiggle);

  if (loading && !data) return <ActivityIndicator size={150} />;
  if (error) return <div>{JSON.stringify(error)}</div>;
  if (squigglesError) return <div>{JSON.stringify(error)}</div>;

  const { getLatestIssues: issues } = data;

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
        <ArticleGrid articles={featured} />
        <Squiggles loading={squigglesLoading} data={squigglesData} />
        <ArticleCardStack articleList={firstArticleStack} title='This Issue' />

        {/* <Grid container spacing={4} style={{ marginTop: 25 }}>
          <Grid item sm={8}>
            <Pulse />
          </Grid>
          <Grid item sm={4}>
            <Calendar />
          </Grid>
        </Grid> */}

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
