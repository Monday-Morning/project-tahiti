import { gql } from '@apollo/client';
import completeArticleData from '../../fragments/article/completeArticleData';

const getRestricedArticleData = gql`
  query getArticleByID($id: ID!) {
    getArticleByID(id: $id) {
      ${completeArticleData}
      isInstituteRestricted
      approvalStatus
      coverMedia {
        rectangle {
          authors {
            details
            name
          }
          imageKitFileID
          storePath
          store
          id
        }
        square {
          authors {
            details
            name
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

export default getRestricedArticleData;
