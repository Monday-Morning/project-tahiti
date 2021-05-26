import { gql } from '@apollo/client';

export default gql`
  query getSquiggles($limit: Int!) {
    listSquiggles(limit: $limit) {
      id
      content {
        plaintext
      }
    }
  }
`;
