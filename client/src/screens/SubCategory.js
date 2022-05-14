import React, { useState } from 'react';

// Libraries
import { Container, makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

// Components
import BackLink from '../components/podcast/BackLink';
import Title from '../components/shared/PageTitle';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import BigArticleCard from '../components/widgets/article/BigArticleCard';

function SubCategory({
  categoryName,
  subCategoryDetails,
  articleList,
  totalPages,
  pageNo,
  handleChange,
}) {
  const classes = useStyles();

  return (
    <Container>
      <BackLink backTo={categoryName} />
      <Title title={subCategoryDetails.name} />
      <BigArticleCard article={articleList[0][0]} />
      <ArticleCardStack articleList={articleList[0].slice(1, 4)} />
      <ArticleCardStack articleList={articleList[0].slice(4, 7)} />
      <Pagination
        className={classes.pagination}
        count={totalPages}
        page={pageNo}
        onChange={handleChange}
      />
    </Container>
  );
}

export default SubCategory;

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    maxWidth: '90vw',
  },
}));
