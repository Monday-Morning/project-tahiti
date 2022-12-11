import { gql } from '@apollo/client';

const updateArticleCategories = gql`
  mutation ($updateArticleCategoriesId: ID!, $categoryNumbers: [Int]!) {
    updateArticleCategories(
      id: $updateArticleCategoriesId
      categoryNumbers: $categoryNumbers
    ) {
      id
      title
      categories {
        category {
          name
        }
      }
      categoryNumbers
    }
  }
`;

export default updateArticleCategories;
