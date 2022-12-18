import React, { useState } from 'react';

// Libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Pagination from '@mui/material/Pagination';

// Components
import BackLink from '../components/podcast/BackLink';
import Title from '../components/shared/PageTitle';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import BigArticleCard from '../components/widgets/article/BigArticleCard';
import SubCategories from '../components/widgets/SubCategory';

// Utils
import ROUTES from '../utils/getRoutes';

function SubCategory({
  categoryName,
  subCategoryDetails,
  articleList,
  totalPages,
  pageNo,
  handleChange,
}) {
  const classes = useStyles();
  const [showAll, setShowAll] = useState(false);

  return (
    <Container>
      <BackLink backTo={categoryName} />
      <Title title={subCategoryDetails.name} />
      {subCategoryDetails.name === 'Academics' &&
        (showAll ? (
          <>
            <div className={classes.departments}>
              {ROUTES.DEPARTMENTS.map(({ name, shortName, path }) => (
                <a
                  key={shortName}
                  href={path}
                  style={{ textDecoration: 'none' }}
                >
                  <SubCategories text={name} className={classes.department} />
                </a>
              ))}
              <div
                className={classes.showAll}
                onClick={() => {
                  setShowAll(false);
                }}
              >
                Show Less
              </div>
            </div>
          </>
        ) : (
          <div className={classes.departments}>
            {ROUTES.DEPARTMENTS.slice(0, 5).map(({ name, shortName, path }) => (
              <a key={shortName} href={path} style={{ textDecoration: 'none' }}>
                <SubCategories text={name} className={classes.department} />
              </a>
            ))}
            <Typography variant='h3'>+15 depts</Typography>
            <div
              className={classes.showAll}
              onClick={() => {
                setShowAll(true);
              }}
            >
              Show All
            </div>
          </div>
        ))}
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
  departments: {
    marginTop: '1rem',
    marginBottom: '66px',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '8px',
  },
  department: {
    whiteSpace: 'nowrap',
  },
  showAll: {
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
    fontSize: '20px',
    fontWeight: '400',
    color: theme.palette.secondary.main,
    fontFamily: 'Source Sans Pro',
    borderBottom: '1px solid #000000',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
}));
