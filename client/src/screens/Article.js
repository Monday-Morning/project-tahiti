import React, { useState } from 'react';

// libraries
import { Container, Grid, useMediaQuery } from '@material-ui/core';
import { useDrag } from 'react-use-gesture';
import theme from '../config/themes/light';

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
  const [toggleSidebar, setToggleSidebar] = useState(false);

  let matches = useMediaQuery(theme.breakpoints.down('sm'));
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (matches) {
      if (down && mx < -10) {
        setToggleSidebar(true);
      } else if ((down && mx > 10 && toggleSidebar) || (down && my !== 0 && toggleSidebar)) {
        setToggleSidebar(false);
      }
    }
  });
  const article = ARTICLE;
  return (
    <div>
      <TopBar />
      <Header />
      <ArticleHeader article={article} />
      <Container {...bind()}>
        <Grid container>
          <Grid item md={9}>
            <ArticleContent article={article} />
            <Disclaimer />
            <ArticleTags tags={article.tags} />
            <hr />
            <Comments />
          </Grid>
          <Grid item md={3}>
            <SidePanel index={article.index} toggleSidebar={toggleSidebar} />
          </Grid>
        </Grid>
      </Container>
      <RecommendedArticles />
      <Footer />
    </div>
  );
}

export default Home;
