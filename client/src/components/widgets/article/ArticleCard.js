import React from 'react';

// Libraries
import { useMediaQuery } from '@mui/material';

// Components
import RegularArticleCard from './RegularArticleCard';
import SmallArticleCard from './SmallArticleCard';

const ArticleCard = ({
  isLastInStack,
  article,
  smallArticleClassName,
  regularArticleClassName,
}) => {
  const matches = useMediaQuery('(max-width: 600px)');

  return matches ? (
    <SmallArticleCard article={article} className={smallArticleClassName} />
  ) : (
    <RegularArticleCard
      isLastInStack={isLastInStack}
      article={article}
      carousel={false}
      className={regularArticleClassName}
    />
  );
};

export default ArticleCard;
