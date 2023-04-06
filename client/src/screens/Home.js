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
import SocialMedia from '../components/homepage/SocialMedia';
import ArticleGrid from '../components/widgets/article/ArticleGrid';

function Home({ issues, squiggles, witsdom, photostory, youtubeLinks }) {
  const tabletMatches = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  const latestIssue = issues[0];
  const secondLatestIssue = issues[1];

  const { featured } = latestIssue;

  const featuredArticles = featured.filter((item) => item !== null);

  if (featuredArticles.length < 5) {
    const backupArticles = [
      ...latestIssue.articles.filter(
        (item1) =>
          item1 !== null &&
          !featuredArticles.some((item2) => item1?.id === item2?.id),
      ),
      ...secondLatestIssue.featured,
    ];

    featuredArticles.push(
      ...backupArticles.slice(0, 5 - featuredArticles.length),
    );
  }

  const articles = [
    ...latestIssue.articles.filter(
      (item1) =>
        item1 !== null &&
        !featuredArticles.some((item2) => item1?.id === item2?.id),
    ),
    ...secondLatestIssue.articles.filter(
      (item1) =>
        item1 !== null &&
        !featuredArticles.some((item2) => item1?.id === item2?.id),
    ),
  ];

  const numberOfStacks = Math.floor(articles.length / (!tabletMatches ? 3 : 4));

  return (
    <>
      <Container>
        <ArticleGrid articles={featuredArticles} />
        <Squiggles data={squiggles} />
        <>
          <ArticleCardStack
            articleList={articles.slice(0, !tabletMatches ? 3 : 4)}
            title='This Issue'
          />
          {articles.length >= (!tabletMatches ? 6 : 8) && (
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
          {Array.from(Array(numberOfStacks).keys())
            .slice(2)
            .map((index) => (
              <ArticleCardStack
                key={`home-article-card-stack-${index}`}
                articleList={articles.slice(
                  !tabletMatches ? 3 * index : 4 * index,
                  !tabletMatches ? 3 * (index + 1) : 4 * (index + 1),
                )}
              />
            ))}
        </>
      </Container>
      <Banner photostory={photostory} witsdom={witsdom} />
      <Container>
        {/* <div style={{ marginTop: 35 }}> */}
        {/* <SocialMedia youtubeLinks={youtubeLinks} /> */}
        <Trending />
        {/* </div> */}
      </Container>
    </>
  );
}

export default Home;
