import React from 'react';

// Components
import Header from '../components/photostory/Header';
import Body from '../components/photostory/Body';
import Comments from '../components/article/comments';
import RecommendedArticles from '../components/article/RecommendedArticles';

// Placeholder
import { PHOTOSTORY } from '../assets/placeholder/photostory';
import { ARTICLES } from '../assets/placeholder/articleCard';

function PhotoStory() {
  return (
    <>
      <Header DATA={PHOTOSTORY} />
      <Body />
      <Comments />
      <RecommendedArticles title='More from Photostories' articles={ARTICLES} />
    </>
  );
}

export default PhotoStory;
