import React from 'react';

// Libraries
import { useMediaQuery } from '@material-ui/core';

// Components
import RegularArticleCard from './RegularArticleCard';
import SmallArticleCard from './SmallArticleCard';

const ArticleCard = () => {
  const matches = useMediaQuery('(max-width: 600px)');

  return matches ? <SmallArticleCard /> : <RegularArticleCard />;
};

export default ArticleCard;
