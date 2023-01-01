import { gql } from '@apollo/client';

const createIssue = gql`
  mutation (
    $name: String!
    $startDate: DateTime!
    $endDate: DateTime!
    $articles: [ID]!
    $featured: [ID]!
    $isPublished: Boolean!
  ) {
    createIssue(
      name: $name
      startDate: $startDate
      endDate: $endDate
      articles: $articles
      featured: $featured
      isPublished: $isPublished
    ) {
      id
      name
      startDate
      endDate
      articles {
        id
        title
      }
      featured {
        id
        title
      }
    }
  }
`;

export default createIssue;
