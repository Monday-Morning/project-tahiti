import { gql } from '@apollo/client';

const updateArticleCover = gql`
  mutation Mutation(
    $updateArticleCoverId: ID!
    $squareRef: ID!
    $rectangleRef: ID!
  ) {
    updateArticleCover(
      id: $updateArticleCoverId
      squareRef: $squareRef
      rectangleRef: $rectangleRef
    ) {
      coverMedia {
        rectangle {
          authors {
            name
            details
          }
          imageKitFileID
          storePath
          store
          id
        }
        square {
          authors {
            name
            details
          }
          imageKitFileID
          storePath
          store
          id
        }
        rectangleID
        squareID
      }
    }
  }
`;

export default updateArticleCover;
