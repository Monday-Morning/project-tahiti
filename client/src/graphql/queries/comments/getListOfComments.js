import { gql } from '@apollo/client';

export default getListOfComments = gql`
  query getListOfComments($ids: [ID]!, $limit: Int) {
    getListOfComments(ids: $ids, limit: $limit) {
      ids
    }
  }
`;
