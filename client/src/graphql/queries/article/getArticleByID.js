import { gql } from '@apollo/client';
import completeArticleData from '../../fragments/article/completeArticleData';

export default gql`
  query getArticleByID($id: ID!) {
    getArticleByID(id: $id) {
      ${completeArticleData}
    }
  }
`;
