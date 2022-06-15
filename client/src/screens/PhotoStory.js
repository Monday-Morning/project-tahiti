import React from 'react';

// libraries
import { Container } from '@mui/material';

// Components
import Header from '../components/photostory/Header';
import Body from '../components/photostory/Body';
import Comments from '../components/article/comments';
import RecommendedArticles from '../components/article/RecommendedArticles';

// Placeholder
import { PHOTOSTORY } from '../assets/placeholder/photostory';

function PhotoStory() {
  return (
    <div>
      <Header DATA={PHOTOSTORY} />
      <Body />
      <hr />
      <Container fixed={true} maxWidth={false}>
        <Comments />
      </Container>

      <RecommendedArticles title='More Photostories' />
    </div>
  );
}

export default PhotoStory;
