import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Section from '../components/expressions/Section';
import Title from '../components/widgets/Title';
// import Issue from '../components/guide/Issue';
// import LatestPodcast from '../components/podcast/LatestPodcast';
import PodcastList from '../components/podcast/List';
import theme from '../config/themes/light';
import SubCategories from '../components/widgets/SubCategories';
import FeaturedArticles from '../components/homepage/FeaturedArticles';
import ArticleCardStack from '../components/widgets/ArticleCardStack';
import BigCarousel from '../components/widgets/BigCarousel';
import FeatureArticle from '../components/expressions/FeatureArticle';

function Expressions() {
  const classes = useStyles(theme);

  const SUBHEADS = [
    'Witsdom',
    'Photostory',
    'Gallery',
    'NITR in Motion',
    'Editorial',
    'Podcasts',
  ];
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.header}>
          <Typography variant='h1' className={classes.head}>
            Expressions
          </Typography>
          <div className={classes.line}></div>
        </div>

        <Grid className={classes.subCategories}>
          {SUBHEADS.map((subHeading, key) => (
            <SubCategories text={subHeading} key={key} className={classes.subCategory} />
          ))}
        </Grid>

        <Section heading='Witsdom' />
        <Title heading='Photostory' />
        <FeaturedArticles />
      </Container>

      <BigCarousel head="Gallery" navigator="XVII Convocation" />
      <Container>
        <Section heading='NITR in Motion' />
        <Title heading='Podcasts' />
      </Container>
      <PodcastList />
      <Container>
        <Title heading='Editorials' />
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
    // marginTop: '3rem',
    marginBottom: '3rem',
    // [theme.breakpoints.down('sm')]: {
    // },
  },
}));
