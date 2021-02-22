import React from 'react';

// Components
import Header from '../components/photostory/Header';
import Body from '../components/gallery/Body';
import Comments from '../components/article/comments';
import RecommendedArticles from '../components/article/RecommendedArticles';

// Placeholder
import { GALLERY } from '../assets/placeholder/gallery';

function Gallery() {
  return (
    <div>
      <Header DATA={GALLERY} />
      <Body />
      <hr />
      <Comments />
      <RecommendedArticles title='More Photostories' />
    </div>
  );
}

export default Gallery;
