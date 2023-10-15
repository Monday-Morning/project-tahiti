import { gql } from '@apollo/client';

const getFirebaseUserByEmail = gql`
  query GetFirebaseUserByEmail($email: String!) {
    getFirebaseUserByEmail(email: $email) {
      email
      customClaims {
        mid
        roles
      }
    }
  }
`;

export default getFirebaseUserByEmail;
