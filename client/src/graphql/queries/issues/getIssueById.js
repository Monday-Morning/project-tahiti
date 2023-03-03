import { gql } from '@apollo/client';

const getIssueById = gql`
  query ($getIssueByIdId: ID!) {
    getIssueByID(id: $getIssueByIdId) {
      id
      name
      startDate
      endDate
      articles {
        id
        title
      }
      featured {
        id
        title
      }
    }
  }
`;

export default getIssueById;
