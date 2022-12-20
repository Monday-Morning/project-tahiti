import { gql } from '@apollo/client';

const updateArticleRestriction = gql`
  mutation (
    $updateArticleRestrictionId: ID!
    $isInstituteRestricted: Boolean!
  ) {
    updateArticleRestriction(
      id: $updateArticleRestrictionId
      isInstituteRestricted: $isInstituteRestricted
    ) {
      id
      title
      isInstituteRestricted
    }
  }
`;

export default updateArticleRestriction;
