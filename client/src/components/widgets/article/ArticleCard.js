import React from 'react';

// Libraries
import { useMediaQuery } from '@material-ui/core';

// Components
import RegularArticleCard from './RegularArticleCard';
import SmallArticleCard from './SmallArticleCard';

const ArticleCard = ({ isLastInStack, article }) => {
  const matches = useMediaQuery('(max-width: 600px)');

  return matches ? (
    <SmallArticleCard article={article} />
  ) : (
    <RegularArticleCard
      isLastInStack={isLastInStack}
      article={article}
      carousel={false}
    />
  );
};

export default ArticleCard;
