import { gql } from '@apollo/client';

const updateArticleTags = gql`
  mutation ($id: ID!, $tag: ID!, $isAdded: Boolean!, $isAdmin: Boolean!) {
    updateArticleTags(
      id: $id
      tag: $tag
      isAdded: $isAdded
      isAdmin: $isAdmin
    ) {
      tags {
        name
        reference
        isAdmin
      }
      adminTags {
        name
        reference
      }
    }
  }
`;

export default updateArticleTags;
