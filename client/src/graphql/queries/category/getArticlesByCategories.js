import { gql } from '@apollo/client';

import basicArticleData from '../../fragments/article/basicArticleData';

export default gql`
  query getArticlesByCategories(
    $categoryNumbers: [Int]!
    $limit: Int
    $offset: Int
  ) {
    getArticlesByCategories(
      categoryNumbers: $categoryNumbers
      limit: $limit
      offset: $offset
    ) {
      ${basicArticleData}
    }
  }
`;
