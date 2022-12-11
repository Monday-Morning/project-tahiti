import React from 'react';

// Components
import Header from '../components/photostory/Header';
import Body from '../components/photostory/Body';
import Comments from '../components/article/comments';
import RecommendedArticles from '../components/article/RecommendedArticles';

// Placeholder
import { ARTICLES } from '../assets/placeholder/articleCard';

function PhotoStory({ photostory }) {
  const { title, authors, readTime, updatedAt, content } = photostory;

  return (
    <>
      <Header
        title={title}
        authors={authors}
        readTime={readTime}
        updatedAt={updatedAt}
      />
      <Body content={content} tags={photostory?.tags} />
      {/* <Comments />
      <RecommendedArticles title='More from Photostories' articles={ARTICLES} /> */}
    </>
  );
}

export default PhotoStory;
