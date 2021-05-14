import React from 'react';

// Libraries
import { useMediaQuery } from '@material-ui/core';

// Components
import RegularArticleCard from './RegularArticleCard';
import SmallArticleCard from './SmallArticleCard';

const ArticleCard = ({ isLastInStack }) => {
  const matches = useMediaQuery('(max-width: 600px)');

  return matches ? (
    <SmallArticleCard />
  ) : (
    <RegularArticleCard isLastInStack={isLastInStack} carousel={false} />
  );
};

export default ArticleCard;
