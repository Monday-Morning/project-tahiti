import { useEffect, useState } from 'react';

import { GraphClient } from '../config/ApolloClient';
import getAutoComplete from '../graphql/queries/tag/getAutoComplete';

const useTagAutoComplete = (searchTag, isAdmin, limit) => {
  const [searchKeyword, setSearchKeyword] = useState(searchTag);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchKeyword(searchTag);
    }, 800);

    return clearTimeout(timer);
  }, [searchTag]);

  useEffect(() => {
    if (!searchKeyword) return;

    (async () => {
      const {
        data: { getAutoComplete: autoCompleteResult },
      } = await GraphClient.query({
        query: getAutoComplete,
        variables: {
          searchTerm: searchKeyword,
          isAdmin: isAdmin,
          limit: limit,
        },
      });

      setResult(autoCompleteResult);
    })();
  }, [searchTag]);

  return result;
};

export default useTagAutoComplete;
