import { gql } from '@apollo/client';

const getLatestIssues = gql`
  query ($onlyPublished: Boolean, $limit: Int, $offset: Int) {
    getLatestIssues(
      onlyPublished: $onlyPublished
      limit: $limit
      offset: $offset
    ) {
      id
      name
      startDate
      endDate
      isPublished
    }
  }
`;

export default getLatestIssues;
