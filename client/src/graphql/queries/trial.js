import { gql } from '@apollo/client';

export default gql`
  query USER($username: String!) {
    getUser(username: $username) {
      _id
      username
      name
    }
  }
`;
