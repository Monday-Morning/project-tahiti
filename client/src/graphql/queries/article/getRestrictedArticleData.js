import { gql } from '@apollo/client';
import completeArticleData from '../../fragments/article/completeArticleData';

const getRestricedArticleData = gql`
  query getArticleByID($id: ID!) {
    getArticleByID(id: $id) {
      ${completeArticleData}
      isInstituteRestricted
    }
  }
`;

export default getRestricedArticleData;
