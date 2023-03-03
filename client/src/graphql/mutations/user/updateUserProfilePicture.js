import { gql } from '@apollo/client';

const updateUserProfilePicture = gql`
  mutation UpdateUserProfilePicture(
    $userId: ID!
    $storePath: String
    $blurhash: String
  ) {
    updateUserProfilePicture(
      id: $userId
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
