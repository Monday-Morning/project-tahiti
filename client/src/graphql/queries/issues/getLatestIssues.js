import { gql } from '@apollo/client';

const getLatestIssues = gql`
  query ($limit: Int, $offset: Int) {
    getLatestIssues(limit: $limit, offset: $offset) {
      id
      name
      startDate
      endDate
      isPublished
    }
  }
`;

export default getLatestIssues;
