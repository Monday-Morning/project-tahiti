import { gql } from '@apollo/client';

import basicArticleData from '../../fragments/article/basicArticleData';

export default gql`
  query getLatestIssues($limit: Int!) {
    getLatestIssues(limit: $limit) {
      id
      featured {
        ${basicArticleData}
      }
      articles {
        ${basicArticleData}
      }
    }
  }
`;
