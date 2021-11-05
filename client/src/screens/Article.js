/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

// libraries
import { Container, Grid, useMediaQuery } from '@material-ui/core';
import { useLocation, Redirect } from 'react-router-dom';
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
import getArticleByID from '../graphql/queries/article/getArticleByID';

// Utils
import getArticleLink, { getArticleSlug } from '../utils/getArticleLink';

function Article() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const articleID = location.pathname.split('/')[2];

  const { loading, error, data } = useQuery(getArticleByID, {
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

  const { getArticleByID: article } = data;

  if (location.pathname.split('/')[3] !== getArticleSlug(article.title)) {
    return <Redirect to={getArticleLink(articleID, article.title)} />;
  }

  return (
    <div>
      <Container {...bind()}>
        <ArticleHeader article={article} articleTitle={article.title} />

        <Grid container>
          <Grid item md={9}>
            <ArticleContent content={article.content} />
            <Disclaimer />
            <ArticleTags tags={article?.tags} />
            <hr />
            <Comments />
          </Grid>

          <Grid item md={3}>
            <SidePanel
              content={article.content}
              toggleSidebar={toggleSidebar}
              articleTitle={article.title}
            />
          </Grid>
        </Grid>
      </Container>

      <RecommendedArticles title='Reading based on your history' />
    </div>
  );
}

export default Article;
