import React, { useContext } from 'react';

// Libraries
import { Container, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// Components
import ArticleCardStack from '../widgets/article/ArticleCardStack';
import Witsdom from '../expressions/Witsdom';
import PhotoStory from '../expressions/PhotoStory';

const Works = ({ user }) => {
  const classes = useStyles();
  const { articleList } = user;

  return (
    <Container>
      <div className={classes.wrapper}>
        {articleList.length > 0 && (
          <div className={classes.sectionWrapper}>
            <Typography
              variant='h1'
              color='primary'
              className={classes.sectionHead}
            >
              Content
            </Typography>
            <ArticleCardStack articleList={articleList} />
          </div>
        )}
        {/* <div className={classes.sectionWrapper}>
          <Typography
            variant='h1'
            color='primary'
            className={classes.sectionHead}
          >
            Design
          </Typography>
          <Grid container spacing={4}>
            {[0, 1].map((key) => (
              <Grid key={key} item sm={6}>
                <Witsdom />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.sectionWrapper}>
          <Typography
            variant='h1'
            color='primary'
            className={classes.sectionHead}
          >
            Photography
          </Typography>
          <Grid container spacing={4}>
            {[0].map((key) => (
              <Grid key={key} item sm={6}>
                <PhotoStory />
              </Grid>
            ))}
          </Grid>
        </div> */}
      </div>
    </Container>
  );
};
export default Works;

const useStyles = makeStyles(() => ({
  wrapper: {
    marginBottom: '4rem',
  },
  sectionWrapper: {
    marginTop: '2rem',
  },
  sectionHead: {
    marginBottom: '1rem',
  },
}));
