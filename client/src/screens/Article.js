/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

// libraries
import { Container, Grid, useMediaQuery } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useDrag } from 'react-use-gesture';

// Components
import Comments from '../components/article/comments';
import ArticleHeader from '../components/article/Header';
import ArticleContent from '../components/article/Content';
import Disclaimer from '../components/article/Disclaimer';
import ArticleTags from '../components/article/Tags';
import RecommendedArticles from '../components/article/RecommendedArticles';

// Assets
import theme from '../config/themes/light';
import { ARTICLE } from '../assets/placeholder/article';
import SidePanel from '../components/article/SidePanel';

function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const articleID = location.pathname.split('/')[2];

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (isMatch) {
      if (down && mx < -10) {
        setToggleSidebar(true);
      } else if (
        (down && mx > 10 && toggleSidebar) ||
        (down && my !== 0 && toggleSidebar)
      ) {
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

      <RecommendedArticles title='Reading based on your history' />
    </div>
  );
}

export default Home;
