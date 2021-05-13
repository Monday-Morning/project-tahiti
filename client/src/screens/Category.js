import React from 'react';

// Libraries
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import { Link, Element } from 'react-scroll';

// Components
import SubCategory from '../components/widgets/SubCategories';
import Carousel from '../components/widgets/Carousel';
import ArticlesCards from '../components/categories/ArticlesCards';

// Assets
import { CATEGORIES } from '../assets/placeholder/categoryPages';

function Category() {
  const classes = useStyles();

  // Categories
  const category = window.location.pathname.split('/')[1];
  let categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  if (category === 'ddcwc') categoryName = 'DD & CWC';

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Container>
          <div className={classes.header}>
            <Grid>
              <Typography variant='h1' className={classes.category}>
                {categoryName}
              </Typography>
            </Grid>
            <Grid className={classes.categoryHeaderText}>{categoryName}</Grid>
          </div>
          <Grid className={classes.subCategories}>
            {CATEGORIES[category].map(({ heading, link }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Link to={link} smooth='true' key={index}>
                <SubCategory
                  text={heading}
                  // eslint-disable-next-line

                  className={classes.subCategory}
                />
              </Link>
            ))}
          </Grid>
        </Container>
        <Carousel />
      </div>

      <div>
        <Container>
          <div className={classes.articlesCards}>
            {CATEGORIES[category].map(
              (
                { heading, smallCards, bigCards, forum, pulse, pniData, link },
                key,
              ) => (
                // eslint-disable-next-line react/no-array-index-key
                <Element name={link} key={key}>
                  <ArticlesCards
                    heading={heading}
                    smallCards={smallCards}
                    bigCards={bigCards}
                    forum={forum}
                    pulse={pulse}
                    pniData={pniData}
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

  wrapper: {
    backgroundColor: theme.palette.secondary.neutral20,
    paddingTop: '2.125rem',
    // position: 'relative',
  },

  header: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },

  category: {
    color: theme.palette.primary.blue60,
    fontFamily: 'IBM Plex Sans',
    borderTop: '4px solid',
    borderColor: theme.palette.primary.blue60,
    width: '124px',
    [theme.breakpoints.up('sm')]: {
      width: '205px',
    },
  },

  categoryHeaderText: {
    fontFamily: 'Source Sans Pro',
    color: theme.palette.secondary.neutral70,
    fontSize: '0.875rem',
    fontWeight: '400',
    opacity: '75%',
    marginTop: '1.5rem',
    textAlign: 'justify',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
  },

  subCategories: {
    marginTop: '1.5rem',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },

  subCategory: {
    whiteSpace: 'nowrap',
  },

  articlesCards: {
    marginTop: '2rem',
    paddingBottom: '2.25rem',
  },
}));
