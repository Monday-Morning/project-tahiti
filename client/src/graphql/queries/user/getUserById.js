import { gql } from '@apollo/client';

export default gql`
  query ($getUserById: ID!) {
    getUserByID(id: $getUserById) {
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
