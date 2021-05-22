import { gql } from '@apollo/client';

export default gql`
  query getArticlesByCategories(
    $categoryNumbers: [Int]!
    $limit: Int
    $offset: Int
  ) {
    getArticlesByCategories(
      categoryNumbers: $categoryNumbers
      limit: $limit
      offset: $offset
    ) {
      id
      articleType
      title
      inshort
      status
      readTime
      createdAt
      updatedAt
      authors {
        name
      }
      tech {
        name
      }
      categories {
        number
        subcategory
        reference {
          number
          parent {
            number
          }
        }
      }
      tags {
        name
      }
      engagementCount {
        reactions
        comments
        bookmarks
        views
        hits
      }
      coverMedia {
        rectangle {
          authors {
            name
          }
          mediaType
          blurhash
          storePath
        }
      }
    }
  }
`;
