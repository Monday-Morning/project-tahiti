import React from 'react';

// libraries
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link, Element } from 'react-scroll';

// components
import Section from '../components/expressions/Section';
import Title from '../components/widgets/Title';
import PodcastList from '../components/podcast/List';
import SubCategories from '../components/widgets/SubCategories';
// import FeaturedArticles from '../components/homepage/FeaturedArticles';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack.js';
import BigCarousel from '../components/widgets/BigCarousel';

// placeholders
import { CAROUSEL } from '../assets/placeholder/guide';
import { EXPRESSIONS } from '../assets/placeholder/categoryPages';

// theme
import theme from '../config/themes/light';

function Expressions() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.header}>
          <Typography variant='h1' className={classes.head}>
            Expressions
          </Typography>
          <div className={classes.line} />
        </div>

        <Grid className={classes.subCategories}>
          {EXPRESSIONS.expressions.map(({ heading, link }, key) => (
            <Link to={link} key={key} smooth='true'>
              <SubCategories text={heading} className={classes.subCategory} />
            </Link>
          ))}
        </Grid>

        <Section heading='Witsdom' link='witsdom' />

        <Title heading='Photostory' link='photostory' />
        {/* <FeaturedArticles /> */}
      </Container>

      <Element name='gallery'>
        <BigCarousel
          head='Gallery'
          navigator='XVII Convocation'
          IMAGE={CAROUSEL}
        />
      </Element>

      <Container>
        <Section heading='NITR in Motion' link='nitr' />

        <Title heading='Podcasts' link='podcasts' />
      </Container>
      <PodcastList />
      <Container>
        <Title heading='Editorials' link='editorial' />
        <ArticleCardStack />
      </Container>
    </div>
  );
}

export default Expressions;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2.7rem 0 2rem 0',
  },

  head: {
    color: theme.palette.primary.blue60,
    lineHeight: '2rem',
  },

  line: {
    [theme.breakpoints.up('sm')]: {
      borderBottom: '1px solid ',
      borderColor: theme.palette.common.black,
      width: '-webkit-fill-available',
      marginInline: '1rem',
      height: '2.5rem',
    },
  },

  subCategories: {
    marginTop: '1rem',
    marginBottom: '3rem',
  },
}));
