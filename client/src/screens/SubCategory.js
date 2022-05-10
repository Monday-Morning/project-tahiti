/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

// Libraries
import { Container, makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

// Components
import BackLink from '../components/podcast/BackLink';
import Title from '../components/shared/PageTitle';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import BigArticleCard from '../components/widgets/article/BigArticleCard';

function SubCategory({ categoryName, subCategoryDetails, articleList }) {

  const classes = useStyles();

  const [pageNo, setPageNo] = useState(1);

  const handleChange = (event, value) => {
    setPageNo(value);
  };

  const noOfarticles = articleList[0].length;
  const maxNoofPages = Math.ceil((noOfarticles - 7) / 9) + 1;

  return (
    <Container>
      <BackLink backTo={categoryName} />
      <Title title={subCategoryDetails.name} />
      {pageNo === 1 ? <>
        <BigArticleCard article={articleList[0][0]} />
        <ArticleCardStack articleList={articleList[0].slice(1, 4)} />
        <ArticleCardStack articleList={articleList[0].slice(4, 7)} />
      </>
        :
        <>
          <ArticleCardStack articleList={articleList[0].slice(pageNo * 9 - 11, pageNo * 9 - 8)} />
          <ArticleCardStack articleList={articleList[0].slice(pageNo * 9 - 8, pageNo * 9 - 5)} />
          <ArticleCardStack articleList={articleList[0].slice(pageNo * 9 - 5, pageNo * 9 - 2)} />
        </>
      }
      <Pagination className={classes.pagination} count={maxNoofPages} page={pageNo} onChange={handleChange} />
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
  }
}))