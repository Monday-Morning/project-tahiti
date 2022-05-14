import { gql } from '@apollo/client';
import completeArticleData from '../../fragments/article/completeArticleData';

export default gql`
  query getArticleByOldID($id: Int!) {
    getArticleByOldID(id: $id) {
      ${completeArticleData}
    }
  }
`;
