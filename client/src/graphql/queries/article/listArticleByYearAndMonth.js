import { gql } from '@apollo/client';

import basicArticleData from '../../fragments/article/basicArticleData';

const listArticlesByYearAndMonth = gql`
    query ListArticlesByYearAndMonth($onlyPublished: Boolean!, $limit: Int, $offset: Int, $year: Int, $month: Int) {
  listArticlesByYearAndMonth(onlyPublished: $onlyPublished, limit: $limit, offset: $offset, year: $year, month: $month) {
        ${basicArticleData}
  }
}
`;

export default listArticlesByYearAndMonth;
