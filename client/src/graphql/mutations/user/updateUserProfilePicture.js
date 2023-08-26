import { gql } from '@apollo/client';

const updateUserProfilePicture = gql`
  mutation UpdateUserProfilePicture(
    $id: ID!
    $store: Int
    $storePath: String!
    $blurhash: String
  ) {
    updateUserProfilePicture(
      id: $id
      store: $store
      storePath: $storePath
      blurhash: $blurhash
    ) {
      id
      picture {
        store
        storePath
        blurhash
      }
    }
  }
`;

export default updateUserProfilePicture;
