import React from 'react';

// libraries
import { Container } from '@mui/material';

// Components
import Squiggles from '../components/widgets/Squiggles';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
// import Pulse from '../components/widgets/Pulse';
// import Calendar from '../components/homepage/Calendar';
// import Banner from '../components/homepage/Banner';
import Trending from '../components/homepage/Trending';
// import SocialMedia from '../components/homepage/SocialMedia';
import ArticleGrid from '../components/widgets/article/ArticleGrid';

function Home({ issues, squiggles }) {
  const latestIssue = issues[0];
  const secondLatestIssue = issues[1];

  const { featured } = latestIssue;

  const articles = [
    ...latestIssue.articles.filter((item) => !featured.includes(item.id)),
    ...secondLatestIssue.articles,
  ];

  return (
    <>
      <Container>
        <ArticleGrid articles={featured} />
        <Squiggles data={squiggles} />

        <ArticleCardStack
          articleList={articles.slice(0, 3)}
          title='This Issue'
        />

        {/* <Grid container spacing={4} style={{ marginTop: 25 }}>
          <Grid item sm={8}>
            <Pulse />
          </Grid>
          <Grid item sm={4}>
            <Calendar />
          </Grid>
        </Grid> */}

        {articles.length > 3 && (
          <ArticleCardStack articleList={articles.slice(3, 6)} />
        )}
      </Container>

      {/* <Banner /> */}

      <Container style={{ marginTop: 35 }}>
        {/* <SocialMedia /> */}
        <Trending />
      </Container>
    </>
  );
}

export default Home;
