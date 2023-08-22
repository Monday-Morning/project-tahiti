import { gql } from '@apollo/client';

const updateUserTopics = gql`
  mutation UpdateUserTopics($id: ID!, $interestedTopics: [Int]!) {
    updateUserTopics(id: $id, interestedTopics: $interestedTopics) {
      id
      interestedTopics
    }
  }
`;

export default updateUserTopics;
