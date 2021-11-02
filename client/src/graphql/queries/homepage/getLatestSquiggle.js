import { gql } from '@apollo/client';

export default gql`
  query getLatestSquiggle {
    getLatestSquiggle {
      id
      content
    }
  }
`;
