import { gql } from '@apollo/client';

import ArticleDetails from '../fragments/article';

export default gql`
  ${ArticleDetails}

  query getIssueByID($id: ID!) {
    getIssueByID(id: $id) {
      name
      articles {
        ...ArticleDetails
      }
    }
  }
`;
