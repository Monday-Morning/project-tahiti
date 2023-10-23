import { gql } from '@apollo/client';

export default gql`
  mutation registerUser($fullName: String!, $email: String!) {
    registerUser(fullName: $fullName, email: $email) {
      id
      fullName
      email
      accountType
    }
  }
`;
