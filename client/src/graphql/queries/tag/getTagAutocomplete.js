import { gql } from '@apollo/client';

const getAutocomplete = gql`
  query ($searchTerm: String!, $isAdmin: Boolean!, $limit: Int) {
    getTagAutocomplete(
      searchTerm: $searchTerm
      isAdmin: $isAdmin
      limit: $limit
    ) {
      id
      name
      isAdmin
    }
  }
`;
export default getAutocomplete;
