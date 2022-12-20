import { gql } from '@apollo/client';

const updateArticleUsers = gql`
  mutation UpdateArticleUsers(
    $updateArticleUsersId: ID!
    $authors: [ID]!
    $photographers: [ID]!
    $designers: [ID]!
    $tech: [ID]!
  ) {
    updateArticleUsers(
      id: $updateArticleUsersId
      authors: $authors
      photographers: $photographers
      designers: $designers
      tech: $tech
    ) {
      id
      title
    }
  }
`;

export default updateArticleUsers;
