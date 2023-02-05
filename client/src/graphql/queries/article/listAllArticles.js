import { gql } from '@apollo/client';

const listAllArticles = gql`
  query ListAllArticles($onlyPublished: Boolean!, $limit: Int!, $offset: Int!) {
    listAllArticles(
      onlyPublished: $onlyPublished
      limit: $limit
      offset: $offset
    ) {
      id
      title
      authors {
        name
      }
      categories {
        number
      }
      tags {
        name
        reference
        isAdmin
      }
      adminTags {
        name
        reference
      }
      comments
      publishStatus
      createdAt
    }
  }
`;

export default listAllArticles;
