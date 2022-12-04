import React from 'react';

// libraries
import { Container, useMediaQuery } from '@mui/material';
import theme from '../config/themes/light';

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
  const mobMatches = useMediaQuery(theme.breakpoints.down('md'));
  const tabletMatches = useMediaQuery(theme.breakpoints.down('lg'));
  const latestIssue = issues[0];
  const secondLatestIssue = issues[1];

  const { featured } = latestIssue;

  const articles = [
    ...latestIssue.articles.filter(
      (item1) => !featured.some((item2) => item1.id === item2.id),
    ),
    ...secondLatestIssue.articles,
  ];

  return (
    <>
      <Container>
        <ArticleGrid articles={featured} />
        <Squiggles data={squiggles} />

        {!tabletMatches ? (
          <>
            <ArticleCardStack
              articleList={articles.slice(0, 3)}
              title='This Issue'
            />
            {articles.length > 3 && (
              <ArticleCardStack articleList={articles.slice(3, 6)} />
            )}
            {/* <Grid container spacing={4} style={{ marginTop: 25 }}>
          <Grid item sm={8}>
            <Pulse />
          </Grid>
          <Grid item sm={4}>
            <Calendar />
          </Grid>
        </Grid> */}
            {articles.length > 6 && (
              <ArticleCardStack
                articleList={articles.slice(6, articles.length)}
              />
            )}
          </>
        ) : (
          <>
            <ArticleCardStack
              articleList={articles.slice(0, 4)}
              title='This Issue'
            />
            {articles.length > 4 && (
              <ArticleCardStack articleList={articles.slice(4, 8)} />
            )}
            {articles.length > 8 && (
              <ArticleCardStack
                articleList={articles.slice(8, articles.length)}
              />
            )}
          </>
        )}

        {/* <Banner /> */}

        {/* <div style={{ marginTop: 35 }}> */}
        {/* <SocialMedia /> */}
        <Trending />
        {/* </div> */}
      </Container>
    </>
  );
}

export default Home;
