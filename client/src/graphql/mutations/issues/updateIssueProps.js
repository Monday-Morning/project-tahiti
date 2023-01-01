import { gql } from '@apollo/client';

const updateIssueProps = gql`
  mutation (
    $updateIssuePropsId: ID!
    $name: String!
    $startDate: DateTime!
    $endDate: DateTime!
  ) {
    updateIssueProps(
      id: $updateIssuePropsId
      name: $name
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      name
      startDate
      endDate
    }
  }
`;

export default updateIssueProps;
