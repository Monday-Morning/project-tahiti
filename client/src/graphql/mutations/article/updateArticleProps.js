import { gql } from '@apollo/client';

const updateArticleProps = gql`
  mutation UpdateArticleProps(
    $updateArticlePropsId: ID!
    $title: String
    $inshort: String
  ) {
    updateArticleProps(
      id: $updateArticlePropsId
      title: $title
      inshort: $inshort
    ) {
      id
      title
      inshort
    }
  }
`;

export default updateArticleProps;
