import { gql } from '@apollo/client';

import ArticleDetails from '../fragments/article';

export default gql`
  ${ArticleDetails}

  query getLatestIssues($limit: Int!) {
    listIssues(limit: $limit) {
      name
      featured {
        ...ArticleDetails
      }
      articles {
        ...ArticleDetails
      }
    }
  }
`;
