import { gql } from '@apollo/client';

const createArticle = gql`
  mutation Mutation(
    $articleType: ArticleTypeEnum!
    $title: String!
    $authors: [ID]!
    $photographers: [ID]!
    $designers: [ID]!
    $tech: [ID]!
    $categoryNumbers: [Int]!
  ) {
    createArticle(
      articleType: $articleType
      title: $title
      authors: $authors
      photographers: $photographers
      designers: $designers
      tech: $tech
      categoryNumbers: $categoryNumbers
    ) {
      id
      title
    }
  }
`;

export default createArticle;
