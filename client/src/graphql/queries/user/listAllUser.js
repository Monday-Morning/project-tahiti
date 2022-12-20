import { gql } from '@apollo/client';

const listAllUser = gql`
  query ListAllUsers($accountType: Int, $limit: Int) {
    listAllUsers(accountType: $accountType, limit: $limit) {
      fullName
      id
    }
  }
`;

export default listAllUser;
