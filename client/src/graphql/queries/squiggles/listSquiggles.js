import { gql } from '@apollo/client';

const listSquiggles = gql`
query ($offset: Int, $limit: Int) {
  listSquiggles(offset: $offset, limit: $limit) {
    content
    createdAt
    id
  }
}
`;

export default listSquiggles;
