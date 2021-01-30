import React, { useState } from 'react';

// libraries
import { Container, Grid, useMediaQuery } from '@material-ui/core';
import { useDrag } from 'react-use-gesture';
import theme from '../config/themes/light';

// Components
import Comments from '../components/article/comments';
import ArticleHeader from '../components/article/Header';
import ArticleContent from '../components/article/Content';
import Disclaimer from '../components/article/Disclaimer';
import ArticleTags from '../components/article/Tags';
import RecommendedArticles from '../components/article/RecommendedArticles';

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
      <Container {...bind()}>
        <ArticleHeader article={article} />

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
    </div>
  );
}

export default Home;
