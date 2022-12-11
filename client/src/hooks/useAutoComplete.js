import { useState, useEffect } from 'react';

//gql
import { GraphClient } from '../config/ApolloClient';
import getAutoComplete from '../graphql/queries/article/getAutoComplete';

const useAutoComplete = (searchText, limit) => {
  const [searchKeyword, setSearchKeyword] = useState(searchText);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchKeyword(searchText);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  useEffect(() => {
    if (!searchKeyword) return;

    (async () => {
      const {
        data: { getAutoComplete: autoCompleteResult },
      } = await GraphClient.query({
        query: getAutoComplete,
        variables: { keywords: searchKeyword, limit: limit },
      });

      setSearchResult(autoCompleteResult);
    })();
  }, [searchKeyword]);

  return searchResult;
};

export default useAutoComplete;
