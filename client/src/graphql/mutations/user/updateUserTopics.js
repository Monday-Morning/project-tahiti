import { gql } from '@apollo/client';

const updateUserTopics = gql`
  mutation UpdateUserTopics($userId: ID!, $interestedTopics: [Int]!) {
    updateUserTopics(id: $userId, interestedTopics: $interestedTopics) {
      id
      interestedTopics
    }
  }
`;

export default updateUserTopics;
