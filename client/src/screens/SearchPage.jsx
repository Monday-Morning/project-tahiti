import React from 'react';

// Libraries
import { Container, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// Components
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';

const SearchPage = ({ articles, keyword }) => {
  const classes = useStyles();
  return (
    <Container maxWidth={false}>
      <Typography variant='h3' component='h3' className={classes.text}>
        {!articles && <span>NO</span>} Search results for - "{keyword}"
      </Typography>
      {articles && <ArticleCardStack articleList={articles} />}
      {!articles && (
        <div className={classes.noresultContainer}>
          <Typography variant='h3' component='h3' className={classes.icon}>
            :(
          </Typography>
          <Typography variant='h3' component='h3' className={classes.heading}>
            Sorry, no results are found...
          </Typography>
          <Typography variant='h5' component='h5' className={classes.desc}>
            If you want to contribute article related to this topic, you can
            mail us your article.
          </Typography>
        </div>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
  noresultContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '100px 0px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '100px',
    marginBottom: '50px',
    [theme.breakpoints.down('md')]: {
      fontSize: '50px',
    },
  },
  heading: {
    fontSize: '30px',
    marginTop: '50px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      marginTop: '0px',
    },
  },
  desc: {
    fontSize: '20px',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
      marginTop: '5px',
    },
  },
}));

export default SearchPage;
