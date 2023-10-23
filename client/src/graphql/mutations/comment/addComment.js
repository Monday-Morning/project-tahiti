import { gql } from '@apollo/client';

export default gql`
  mutation createComment($content: String!, $authorID: ID!, parentID: ID!, parentType: String!) {
    createComment(content: $content, id: $authorID, parentID: $parentID, parentType: $parentType) {
      content
      id
      parentID
      parentType
    }
  }
`;
