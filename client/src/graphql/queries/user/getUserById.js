import { gql } from '@apollo/client';

export default gql`
  query ($getUserById: ID!) {
    getUserByID(id: $getUserById) {
      id
      firstName
      lastName
      fullName
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
