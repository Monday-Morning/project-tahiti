/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// libraries
import { Container, Grid } from '@material-ui/core';

// Components
import Comments from '../components/article/comments';
import ArticleHeader from '../components/article/Header';
import ArticleContent from '../components/article/Content';
import Disclaimer from '../components/article/Disclaimer';
import ArticleTags from '../components/article/Tags';
import RecommendedArticles from '../components/article/RecommendedArticles';
import SidePanel from '../components/article/SidePanel';

function Article({ article, bind, toggleSidebar }) {
  return (
    <>
      <Container {...bind()}>
        <ArticleHeader article={article} />

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

      {/* TODO: Implement reccomender */}
      {/* <RecommendedArticles title='Reading based on your history' /> */}
    </>
  );
}

export default Article;
