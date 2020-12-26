import React from 'react';

// libraries
import { Container, Grid } from '@material-ui/core';

// Components
import Header from '../components/marginals/Header';
import Footer from '../components/marginals/Footer';
import TopBar from '../components/marginals/TopBar';
import RecommendedArticles from '../components/article/RecommendedArticles';
import Comments from '../components/article/Comments';
import ArticleHeader from '../components/article/Header';
import ArticleContent from '../components/article/Content';
import Disclaimer from '../components/article/Disclaimer';
import ArticleTags from '../components/article/Tags';

//placeholders
import { ARTICLE } from '../assets/placeholder/article';
import SidePanel from '../components/article/SidePanel';

function Home() {
  const article = ARTICLE;
  return (
    <div>
      <TopBar />
      <Header />
      <ArticleHeader article={article} />
      <Container>
        <Grid container>
          <Grid item md={9}>
            <ArticleContent article={article} />
            <Disclaimer />
            <ArticleTags tags={article.tags} />
            <hr />
            <Comments />
          </Grid>
          <Grid item md={3}>
            <SidePanel index={article.index} />
          </Grid>
        </Grid>
      </Container>
      <RecommendedArticles />
      <Footer />
    </div>
  );
}

export default Home;
