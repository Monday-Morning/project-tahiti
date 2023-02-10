import { gql } from '@apollo/client';

const updateUserTopics = gql`
  mutation UpdateUserTopics($userId: ID!, $interestedTopics: [String]!) {
    updateUserTopics(id: $userId, interestedTopics: $interestedTopics) {
      id
      interestedTopics
    }
  }
`;

export default updateUserTopics;
