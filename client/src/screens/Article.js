/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

// libraries
import { Container, Grid, useMediaQuery } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useDrag } from 'react-use-gesture';
import { useQuery } from '@apollo/client';

// Components
import Comments from '../components/article/comments';
import ArticleHeader from '../components/article/Header';
import ArticleContent from '../components/article/Content';
import Disclaimer from '../components/article/Disclaimer';
import ArticleTags from '../components/article/Tags';
import RecommendedArticles from '../components/article/RecommendedArticles';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import SidePanel from '../components/article/SidePanel';

// Assets
import theme from '../config/themes/light';

// Queries
import GetArticleByID from '../graphql/queries/getArticleByID';

// Utils
import getStructuredContent from '../utils/articleContentParser';

function Article() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const articleID = location.pathname.split('/')[2];
  const articleTitle = location.pathname.split('/')[3];

  const { loading, error, data } = useQuery(GetArticleByID, {
    variables: { id: articleID },
  });

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

  if (loading && !data) return <ActivityIndicator size={150} />;
  if (error) return <div>{error}</div>;

  const { getArticle: article } = data;
  const structuredContent = getStructuredContent(article.content);

  return (
    <div>
      <Container {...bind()}>
        <ArticleHeader article={article} articleTitle={articleTitle} />

        <Grid container>
          <Grid item md={9}>
            <ArticleContent structuredContent={structuredContent} />
            <Disclaimer />
            <ArticleTags tags={article.tags} />
            <hr />
            <Comments />
          </Grid>

          <Grid item md={3}>
            <SidePanel
              structuredContent={structuredContent}
              toggleSidebar={toggleSidebar}
              articleTitle={articleTitle}
            />
          </Grid>
        </Grid>
      </Container>

      <RecommendedArticles title='Reading based on your history' />
    </div>
  );
}

export default Article;
