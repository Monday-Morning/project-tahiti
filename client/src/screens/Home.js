import React from 'react';

// libraries
import { Container, useMediaQuery } from '@mui/material';
import theme from '../config/themes/light';

// Components
import Squiggles from '../components/widgets/Squiggles';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
// import Pulse from '../components/widgets/Pulse';
// import Calendar from '../components/homepage/Calendar';
import Banner from '../components/homepage/Banner';
import Trending from '../components/homepage/Trending';
// import SocialMedia from '../components/homepage/SocialMedia';
import ArticleGrid from '../components/widgets/article/ArticleGrid';

function Home({ issues, squiggles, witsdom, photostory, youtubeLink }) {
  const tabletMatches = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

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
        <>
          <ArticleCardStack
            articleList={articles.slice(0, !tabletMatches ? 3 : 4)}
            title='This Issue'
          />
          {(articles.length > !tabletMatches ? 3 : 4) && (
            <ArticleCardStack
              articleList={
                !tabletMatches ? articles.slice(3, 6) : articles.slice(4, 8)
              }
            />
          )}
          {/* <Grid container spacing={4} style={{ marginTop: 25 }}>
          <Grid item sm={8}>
            <Pulse />
          </Grid>
          <Grid item sm={4}>
            <Calendar />
          </Grid>
        </Grid> */}
          {(articles.length > !tabletMatches ? 6 : 8) && (
            <ArticleCardStack
              articleList={articles.slice(
                !tabletMatches ? 6 : 8,
                articles.length,
              )}
            />
          )}
        </>
      </Container>
      <Container>
        <Banner photostory={photostory} witsdom={witsdom} />

        {/* <div style={{ marginTop: 35 }}> */}
        {/* <SocialMedia youtubeLink={youtubeLink} /> */}
        <Trending />
        {/* </div> */}
      </Container>
    </>
  );
}

export default Home;
