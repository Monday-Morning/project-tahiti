import gql from '@apollo/client';

export default gql`
  query USER {
    getUser(username: "riteshsp2000") {
      _id
      username
      name
    }
  }
`;
