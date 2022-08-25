import { gql } from '@apollo/client';

export default gql`
  query GetUserByOldUserName($oldUserName: String!) {
    getUserByOldUserName(oldUserName: $oldUserName) {
      id
      firstName
      lastName
      email
      picture {
        store
        storePath
      }
      contributions {
        model
        reference
      }
    }
  }
`;
