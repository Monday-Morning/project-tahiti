import { gql } from '@apollo/client';

const countTotalArticles = gql`
  query ($onlyPublished: Boolean) {
    countTotalArticles(onlyPublished: $onlyPublished)
  }
`;

export default countTotalArticles;
