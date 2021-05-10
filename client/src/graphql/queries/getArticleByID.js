import { gql } from '@apollo/client';

export default gql`
  query getArticleByID($id: ID!) {
    getArticle(id: $id) {
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
      content {
        plaintext
        data
        mediaID
        media {
          storePath
          authors {
            name
          }
          mediaType
          blurhash
        }
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
    }
  }
`;
