import React from 'react';

// libraries
import makeStyles from '@mui/styles/makeStyles';

// Components
import ArticleCardStack from '../widgets/article/ArticleCardStack';

const RecommendedArticles = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ArticleCardStack articleList={articles.slice(0, 3)} />
    </div>
  );
};
export default RecommendedArticles;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1.5rem',
    backgroundColor: theme.palette.primary.blue10,
    paddingTop: '0.1rem',
    paddingBottom: '2rem',
  },
}));
