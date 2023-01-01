import { gql } from '@apollo/client';

const removeIssue = gql`
  mutation RemoveIssue($removeIssueId: ID!) {
    removeIssue(id: $removeIssueId) {
      id
      name
    }
  }
`;

export default removeIssue;
