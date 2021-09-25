import React from 'react';

// Libraries
import moment from 'moment';
import { makeStyles, Typography } from '@material-ui/core';

// Components
import NewTabLink from '../../shared/links/NewTabLink';

// Utils
import limitString from '../../../utils/limitString';
import getCategory from '../../../utils/determineCategory';

const ArticleItem = ({ article, className }) => {
  const {
    id,
    categories,
    title,
    readTime,
    authors,
    coverMedia: {
      rectangle: { storePath },
    },
  } = article;
  const classes = useStylesItem({
    storePath: storePath.split(' ').join('%20'),
  });

  return (
    <NewTabLink
      to={`/article/${id}/${title}`}
      className={`${classes.link} ${className}`}
    >
      <article className={classes.articleContainer}>
        {/* Following typography (h3 element) is used for accessibility purposes */}
        {/* Event Article requires a heading (h2-h6 preferred) */}
        <Typography hidden variant='h3'>
          {limitString(title, 48)}
        </Typography>
        <section className={classes.articleDetailsContainer}>
          <div className={classes.categoriesContainer}>
            {categories
              .filter(({ number }) => number > 10)
              .slice(0, 3)
              .map(({ number }, index) => (
                <Typography
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${number}-${index}-bigArticleCard-category`}
                  variant='body2'
                  className={classes.category}
                >
                  {getCategory(number)}
                  {index === article.categories.length - 1 ? (
                    ''
                  ) : (
                    <span
                      style={{
                        textDecoration: 'none',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                      }}
                    >
                      |
                    </span>
                  )}
                </Typography>
              ))}
          </div>

          <Typography variant='h3' className={classes.articleTitle}>
            {limitString(title, 48)}
          </Typography>

          <div className={classes.metaDetailsContainer}>
            <div className={classes.authorsList}>
              {authors.map(({ name }) => (
                <Typography
                  variant='body2'
                  key={name}
                  className={classes.author}
                >
                  {name.split(' ')[0]},
                </Typography>
              ))}
            </div>

            <div className={classes.readTime}>
              <i className={`far fa-clock ${classes.clockIcon}`} />
              <Typography variant='body2'>
                {moment.utc(moment.duration(readTime, "seconds").asMilliseconds()).format("m [mins]")}
              </Typography>
            </div>
          </div>
        </section>
      </article>
    </NewTabLink>
  );
};

const useStylesItem = makeStyles((theme) => ({
  link: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2),  rgba(0,0,0,0.9))',
  },
  articleContainer: {
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'flex-end',

    color: theme.palette.common.white,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: ({ storePath }) =>
      `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(${storePath})`,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  articleDetailsContainer: {
    width: '100%',
    padding: '10px',
    paddingBottom: '20px',
  },
  categoriesContainer: {
    width: '100%',
    height: 'auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',

    marginBottom: '10px',
  },
  category: {
    width: 'auto',
    fontFamily: 'Source Sans Pro',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    color: theme.palette.secondary.neutral60,
  },
  articleTitle: {
    marginTop: '4px',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '600',
    fontFamily: 'IBM Plex Sans',
  },
  metaDetailsContainer: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  authorsList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: 'auto',
  },
  author: {
    display: 'inline',
    fontSize: '15px',
    color: theme.palette.secondary.neutral60,
    fontWeight: '400',
    marginRight: '10px',
  },
  clockIcon: {
    marginRight: '5px',
  },
  readTime: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: '400',
    color: theme.palette.secondary.neutral70,
  },
}));

function ArticleGrid({ articles }) {
  const classes = useStylesGrid();

  return (
    <section className={classes.articleGrid}>
      <ArticleItem
        className={`${classes.article} ${classes.large}`}
        article={articles[0]}
      />

      {[0, 1, 2, 3].map((number) => (
        <ArticleItem
          key={number}
          className={`${classes.article} ${classes.small}`}
          article={articles[number + 1]}
        />
      ))}
    </section>
  );
}

export default ArticleGrid;

const useStylesGrid = makeStyles((theme) => ({
  articleGrid: {
    marginTop: '30px',
    borderRadius: '7px',
    overflow: 'hidden',

    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(5, 175px)',

    [theme.breakpoints.down('xs')]: {
      gap: '10px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      gridTemplateRows: 'repeat(4, 175px)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateRows: 'repeat(2, 265px)',
    },
  },
  large: {
    gridColumn: 'span 5',

    [theme.breakpoints.between('sm', 'md')]: {
      gridColumn: '1/5',
      gridRow: '1/3',
    },
    [theme.breakpoints.up('md')]: {
      gridColumn: '1/3',
      gridRow: '1/3',
    },
  },
  small: {
    gridColumn: 'span 5',

    [theme.breakpoints.between('sm', 'md')]: {
      gridColumn: 'span 2',
      gridRow: 'span 1',
    },
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 1',
      gridRow: 'span 1',
    },
  },
  article: {
    borderRadius: '7px',
    overflow: 'hidden',

    [theme.breakpoints.up('sm')]: {
      borderRadius: '0px',
    },
  },
}));
