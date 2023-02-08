import { gql } from '@apollo/client';

const updateUserTopics = gql`
  mutation UpdateUserTopics(
    $updateUserTopicsId: ID!
    $interestedTopics: [String]!
  ) {
    updateUserTopics(
      id: $updateUserTopicsId
      interestedTopics: $interestedTopics
    ) {
      id
      interestedTopics
    }
  }
`;

export default updateUserTopics;
