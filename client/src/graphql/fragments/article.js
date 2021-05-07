import { gql } from '@apollo/client';

export default gql`
  fragment ArticleDetails on Article {
    id
    articleType
    title
    content {
      plaintext
      data
      mediaID
      contentType
      blockFormatting {
        align
        hasHeaderRow
        listStyle
      }
      textFormatting {
        bold
        italic
        underline
        strikethrough
        size
        start
        end
      }
    }
    inshort
    authors {
      name
    }
    tech {
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
    coverMedia {
      rectangle {
        storePath
        blurhash
      }
    }
    status
  }
`;
