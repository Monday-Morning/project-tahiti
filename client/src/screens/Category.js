import React from 'react';
import Link from 'next/link';

// Libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Link as ScrollLink, Element } from 'react-scroll';

// Components
import SubCategory from '../components/widgets/SubCategory';
import ArticleCarousel from '../components/widgets/article/ArticleCarousel';
import SubCategorySection from '../components/categories/SubCategorySection';

// Utils
import ROUTES from '../utils/getRoutes';

function Category({ articleList, categoryShortName, category }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.navbarContainer}>
        <Container maxWidth='xl'>
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
              <Link passHref href='/live' style={{ textDecoration: 'none' }}>
                <SubCategory
                  text='Live'
                  isRed
                  className={classes.subCategory}
                />
              </Link>
            )}
          </div>
        </Container>
        <ArticleCarousel
          articleList={articleList
            .reduce((prev, curr) => [...prev, ...curr])
            .slice(0, 30)
            .reduce((prev, curr) => {
              if (prev instanceof Array)
                return prev.some((item2) => curr.id === item2.id)
                  ? prev
                  : [...prev, curr];
              if (prev.id == curr.id) return prev;
              return [prev, curr];
            })
            .slice(0, 10)}
        />
      </div>

      <div>
<<<<<<< Updated upstream
        <Container fixed={true} maxWidth={false}>
=======
        <Container maxWidth='xl'>
>>>>>>> Stashed changes
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
