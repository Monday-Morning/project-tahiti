import { useEffect, useState } from 'react';

import { getGraphClient } from '../context/ApolloContextProvider';
import getTagAutocomplete from '../graphql/queries/tag/getTagAutocomplete';

const useTagAutoComplete = (searchTag, isAdmin, limit) => {
  const graphClient = getGraphClient();
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
      } = await graphClient.query({
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
