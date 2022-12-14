import { gql } from '@apollo/client';

const autoComplete = gql`
  query ($keywords: String!, $limit: Int) {
    getAutoComplete(keywords: $keywords, limit: $limit) {
      id
      title
    }
  }
`;

export default autoComplete;
