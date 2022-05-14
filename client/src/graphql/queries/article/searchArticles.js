import { gql } from '@apollo/client';
import basicArticleData from '../../fragments/article/basicArticleData';

export default gql`
  query searchArticles(
    $keywords: String!
    $limit: Int
    $offset: Int
  ) {
    getArticlesByCategories(
      keywords: $keywords
      limit: $limit
      offset: $offset
    ) {
      ${basicArticleData}
    }
  }
`;
