import { gql } from '@apollo/client';

export default getCommentByID = gql`
  query getCommentById($id: ID!) {
    getListOfComments(ids: $id) {
      id
    }
  }
`;
