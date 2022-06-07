import { gql } from '@apollo/client';

import basicArticleData from '../../fragments/article/basicArticleData';

export default gql`
  query GetListOfArticles($ids: [ID]!,$limit: Int) {
    getListOfArticles(ids: $ids,limit: $limit) {
     ${basicArticleData}
     createdAt
    }
  }
`;
