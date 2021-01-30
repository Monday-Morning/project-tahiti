import { Grid, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import SubCategory from '../components/widgets/SubCategories';
import theme from '../config/themes/light';
import Carousel from '../components/widgets/Carousel';
import ArticlesCards from '../components/categories/ArticlesCards';
import { CATEGORIES } from '../assets/placeholder/widget';

function Category({ category, categoryName, categoryHeader }) {
  const props = {
    categories: CATEGORIES,
  };

  const classes = useStyles(theme);

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Container>
            <div className={classes.header}>
              <Grid className={classes.category}>{categoryName}</Grid>
              <Grid className={classes.categoryHeaderText}>{categoryHeader}</Grid>
            </div>
            <Grid className={classes.subCategories}>
              {props.categories[category].map(({ heading }, key) => (
                <SubCategory text={heading} key={key} className={classes.subCategory} />
              ))}
            </Grid>
          </Container>
          <Carousel />
        </div>

        <div>
          <Container>
            <div className={classes.articlesCards}>
              {props.categories[category].map(
                ({ heading, smallCards, bigCards, forum, pulse, pniData }, key) => (
                  <ArticlesCards
                    heading={heading}
                    smallCards={smallCards}
                    bigCards={bigCards}
                    forum={forum}
                    pulse={pulse}
                    key={key}
                    pniData={pniData}
                  />
                ),
              )}
            </div>
          </Container>
        </div>
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
    fontSize: '1.5rem',
    color: theme.palette.primary.blue60,
    fontFamily: 'IBM Plex Sans',
    lineHeight: '2rem',
    borderTop: '4px solid',
    borderColor: theme.palette.primary.blue60,
    width: '124px',
    [theme.breakpoints.up('sm')]: {
      width: '205px',
      fontSize: '2rem',
      lineHeight: '3rem',
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
