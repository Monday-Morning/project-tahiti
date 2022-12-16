import { gql } from '@apollo/client';

const updateArticlePublishStatus = gql`
  mutation UpdateArticlePublishStatus(
    $updateArticlePublishStatusId: ID!
    $publishStatus: PublishStatusEnum!
  ) {
    updateArticlePublishStatus(
      id: $updateArticlePublishStatusId
      publishStatus: $publishStatus
    ) {
      id
      title
      publishStatus
    }
  }
`;

export default updateArticlePublishStatus;
