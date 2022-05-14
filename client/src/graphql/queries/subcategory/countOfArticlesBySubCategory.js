import { gql } from '@apollo/client';

export default gql`
  query ($categoryNumber: Int!) {
    countOfArticlesBySubCategory(categoryNumber: $categoryNumber)
  }
`;
