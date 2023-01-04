import { gql } from '@apollo/client';

const updateIssueArticles = gql`
  mutation ($updateIssueArticlesId: ID!, $articles: [ID]!, $featured: [ID]!) {
    updateIssueArticles(
      id: $updateIssueArticlesId
      articles: $articles
      featured: $featured
    ) {
      id
      name
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

export default updateIssueArticles;
