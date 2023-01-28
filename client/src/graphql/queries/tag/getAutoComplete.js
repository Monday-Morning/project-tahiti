import { gql } from '@apollo/client';

const getAutoComplete = gql`
  query ($searchTerm: String!, $isAdmin: Boolean!, $limit: Int) {
    getAutoComplete(searchTerm: $searchTerm, isAdmin: $isAdmin, limit: $limit) {
      id
      name
      isAdmin
    }
  }
`;
export default getAutoComplete;
