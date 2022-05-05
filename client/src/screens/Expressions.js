import React from 'react';

// Libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-scroll';

// Components
import Section from '../components/expressions/Section';
import PodcastList from '../components/podcast/List';
import SubCategories from '../components/widgets/SubCategory';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack.js';
import BigCarousel from '../components/widgets/BigCarousel';
import SectionTitle from '../components/categories/SectionTitle';
// import FeaturedArticles from '../components/homepage/FeaturedArticles';

// Utils
import ROUTES from '../utils/getRoutes';

// Placeholders
import { CAROUSEL } from '../assets/placeholder/guide';

const CONTENT = [
  {
    name: 'Witsdom',
    container: true,
    section: <Section heading='Witsdom' />,
  },
  {
    name: 'Photostory',
    container: true,
    section: <Section heading='Photostory' />,
  },
  {
    name: 'Gallery',
    container: false,
    section: (
      <BigCarousel
        head='Gallery'
        navigator='XVII Convocation'
        IMAGE={CAROUSEL}
      />
    ),
  },
  {
    name: 'Podcasts',
    container: true,
    section: <PodcastList />,
  },
  {
    name: 'Editorial',
    container: true,
    section: <ArticleCardStack />,
  },
];

const EXPRESSIONS_CONTENT = ROUTES.SUB_CATEGORIES.OBJECT.EXPRESSIONS.map(
  ({ name, shortName, path }, index) => ({
    name,
    shortName,
    path,
    ...CONTENT[index],
  }),
);

function Expressions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.header}>
          <Typography variant='h1' className={classes.head}>
            Expressions
          </Typography>
          <div className={classes.line} />
        </div>

        <div className={classes.subCategories}>
          {ROUTES.SUB_CATEGORIES.OBJECT.EXPRESSIONS.map(
            ({ name, shortName }) => (
              <Link key={shortName} to={shortName} smooth>
                <SubCategories text={name} />
              </Link>
            ),
          )}
        </div>
      </Container>

      {EXPRESSIONS_CONTENT.map(
        ({ name, shortName, path, container, section }) => {
          const element = (
            <React.Fragment key={shortName}>
              <SectionTitle
                heading={name}
                link={shortName}
                path={path}
                container={!container}
              />
              {section}
            </React.Fragment>
          );

          return container ? (
            <Container key={shortName}>{element}</Container>
          ) : (
            element
          );
        },
      )}
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

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
}));
