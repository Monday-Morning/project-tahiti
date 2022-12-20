import { gql } from '@apollo/client';

const addMedia = gql`
  mutation Mutation(
    $imageKitFileId: ID!
    $authors: [ID]!
    $storePath: String!
    $store: Int
  ) {
    addMedia(
      imageKitFileID: $imageKitFileId
      authors: $authors
      storePath: $storePath
      store: $store
    ) {
      id
      imageKitFileID
      store
      storePath
    }
  }
`;

export default addMedia;
