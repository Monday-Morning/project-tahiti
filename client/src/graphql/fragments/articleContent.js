import { gql } from '@apollo/client';

export default gql`
  fragment ArticleContent on Article {

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
`;
