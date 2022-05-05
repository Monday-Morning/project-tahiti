import React from 'react';

// libraries
import { Container, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// Components
import ArticleCardStack from '../widgets/article/ArticleCardStack';

const RecommendedArticles = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.titleWrapper}>
          <Typography variant='h2' className={classes.title}>
            {title}
          </Typography>
          <div className={classes.underline} />
        </div>
        <ArticleCardStack />
      </Container>
    </div>
  );
};
export default RecommendedArticles;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '2rem',
    backgroundColor: theme.palette.primary.blue10,
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  titleWrapper: {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    display: 'inline-block',
    width: 'auto',
  },
  underline: {
    height: '2px',
    backgroundColor: 'black',
    marginLeft: '40px',
    flex: 1,
  },
}));
