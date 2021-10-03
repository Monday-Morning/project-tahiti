import React from 'react';

// Libraries
import { Container, makeStyles, Typography } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { useQuery } from '@apollo/client';

// Components
import SubCategory from '../components/widgets/SubCategory';
import ArticleCarousel from '../components/widgets/article/ArticleCarousel';
import SubCategorySection from '../components/categories/SubCategorySection';
import ActivityIndicator from '../components/shared/ActivityIndicator';

// Utils
import ROUTES from '../utils/getRoutes';

// Graphql
import GetArticlesByCategories from '../graphql/queries/getArticlesByCategories';

function Category() {
  const classes = useStyles();

  // 1. Determine category from the url.
  // 2. Get the title for the category from the ROUTES object.
  const location = useLocation();
  const categoryShortName = location.pathname.split('/')[1];
  const category = ROUTES.CATEGORIES.filter(
    ({ shortName }) => shortName === categoryShortName,
  )[0];

  const { loading, error, data } = useQuery(GetArticlesByCategories, {
    variables: {
      categoryNumbers: [category.idNumber, ...category.subCategoryIds],
      limit: 4,
    },
  });

  if (loading && !data) return <ActivityIndicator size={150} />;
  if (error) return <div>{JSON.stringify(error)}</div>;
  if (!data.getArticlesByCategories) return <div>Internal Server Error</div>;

  const { getArticlesByCategories: articleList } = data;

  return (
    <div className={classes.container}>
      <div className={classes.navbarContainer}>
        <Container>
          <Typography variant='h1' className={classes.title}>
            {category.name}
          </Typography>

          <div className={classes.subCategories}>
            {/* Render SubCategories from the ROUTES object */}
            {ROUTES.SUB_CATEGORIES.OBJECT[categoryShortName.toUpperCase()].map(
              ({ name, shortName }) => (
                <ScrollLink key={shortName} to={shortName} smooth='true'>
                  <SubCategory text={name} className={classes.subCategory} />
                </ScrollLink>
              ),
            )}
            {categoryShortName === 'career' && (
              <Link to='/live' style={{ textDecoration: 'none' }}>
                <SubCategory
                  text='Live'
                  isRed
                  className={classes.subCategory}
                />
              </Link>
            )}
          </div>
        </Container>
        <ArticleCarousel articleList={articleList[0].slice(0, 10)} />
      </div>

      <div>
        <Container>
          <div className={classes.articlesCards}>
            {ROUTES.SUB_CATEGORIES.OBJECT[categoryShortName.toUpperCase()].map(
              ({ name, shortName, path }, index) => (
                <Element name={shortName} key={shortName}>
                  <SubCategorySection
                    path={path}
                    heading={name}
                    smallCards
                    bigCards
                    articleList={articleList[index + 1]}
                  />
                </Element>
              ),
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Category;

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '100%',
    marginTop: '1.5rem',
  },
  navbarContainer: {
    backgroundColor: theme.palette.secondary.neutral20,
    paddingTop: '2.125rem',
  },
  title: {
    display: 'inline-block',
    color: theme.palette.primary.blue60,
    fontFamily: 'IBM Plex Sans',
    borderTop: '4px solid',
    borderColor: theme.palette.primary.blue60,
    minWidth: '124px',
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      minWidth: '205px',
    },
  },
  subCategories: {
    marginTop: '1.5rem',
    maxWidth: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  subCategory: {
    whiteSpace: 'nowrap',
  },
  articlesCards: {
    marginTop: '2rem',
    paddingBottom: '2.25rem',
  },
}));
