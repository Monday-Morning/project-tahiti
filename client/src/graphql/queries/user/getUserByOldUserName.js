import { gql } from '@apollo/client';

export default gql`
  query GetUserByOldUserName($oldUserName: String!) {
    getUserByOldUserName(oldUserName: $oldUserName) {
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
