import { gql } from '@apollo/client';

export default gql`
  mutation addUser($name: String!, $username: String!) {
    addUser(name: $name, username: $username) {
      username
      name
    }
  }
`;
