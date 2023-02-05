import { gql } from '@apollo/client';

const createTag = gql`
  mutation createTag($name: String!, $isAdmin: Boolean, $adminColor: String) {
    createTag(name: $name, isAdmin: $isAdmin, adminColor: $adminColor) {
      id
      name
      isAdmin
    }
  }
`;

export default createTag;
