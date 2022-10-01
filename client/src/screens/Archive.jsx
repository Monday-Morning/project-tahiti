import { React } from 'react';

// libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Components
import BackButton from '../components/shared/button/BackButton';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import Calendar from '../components/guide/calendar';

// Assets
import { ARTICLES } from '../assets/placeholder/articleCard';

function Archive() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BackButton path='/' goTo='Home' />
        <Typography variant='h1' className={classes.head}>
          Archive
        </Typography>
      </Container>
      <Calendar />
      <Container>
        <ArticleCardStack articleList={ARTICLES} />
      </Container>
    </div>
  );
}

export default Archive;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  head: {
    color: theme.palette.primary.blue60,
    lineHeight: '2rem',
    margin: '2.7rem 0 2rem 0',
  },
}));
