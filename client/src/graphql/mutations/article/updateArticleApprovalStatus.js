import { gql } from '@apollo/client';

const updateArticleApprovalStatus = gql`
  mutation ($updateArticleApprovalStatusId: ID!, $approvalStatus: Boolean!) {
    updateArticleApprovalStatus(
      id: $updateArticleApprovalStatusId
      approvalStatus: $approvalStatus
    ) {
      id
      title
      approvalStatus
    }
  }
`;

export default updateArticleApprovalStatus;
