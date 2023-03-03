import { useEffect, useState } from 'react';

import { GraphClient } from '../config/ApolloClient';
import getTagAutocomplete from '../graphql/queries/tag/getTagAutocomplete';

const useTagAutoComplete = (searchTag, isAdmin, limit) => {
  const [searchKeyword, setSearchKeyword] = useState(searchTag);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchKeyword(searchTag);
    }, 100);

    return () => clearTimeout(timer);
  }, [searchTag]);

  useEffect(() => {
    if (!searchKeyword) return;

    (async () => {
      const {
        data: { getTagAutocomplete: autoCompleteResult },
      } = await GraphClient.query({
        query: getTagAutocomplete,
        variables: {
          searchTerm: searchKeyword,
          isAdmin: isAdmin,
          limit: limit,
        },
      });

      setResult(autoCompleteResult);
    })();
  }, [searchKeyword]);

  return result;
};

export default useTagAutoComplete;
