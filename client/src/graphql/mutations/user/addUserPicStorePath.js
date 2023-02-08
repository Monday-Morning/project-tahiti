import { gql } from '@apollo/client';

const addUserPicStorePath = gql`
  mutation ($addUserPicStorePathId: ID!, $storePath: String!) {
    addUserPicStorePath(id: $addUserPicStorePathId, storePath: $storePath) {
      id
      firstName
      picture {
        storePath
      }
    }
  }
`;

export default addUserPicStorePath;
