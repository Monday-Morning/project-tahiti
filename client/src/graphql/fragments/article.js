import { gql } from '@apollo/client';

export default gql`
  fragment ArticleDetails on Article {
    id
    articleType
    title
    inshort
    readTime
    status
    authors {
      name
    }
    categories {
      number
      subcategory
    }
    tags {
      name
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
`;
