import { useState, useEffect, useContext } from 'react';

//gql
import getAutoComplete from '../graphql/queries/article/getAutoComplete';
import { apolloContext } from '../context/ApolloContextProvider';

const useAutoComplete = (searchText, limit) => {
  const graphClient = useContext(apolloContext);
  const [searchKeyword, setSearchKeyword] = useState(searchText);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setSearchKeyword(searchText);
      },
      searchText.length < 3 ? 10 : 300,
    );

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  useEffect(() => {
    if (!searchKeyword) return;

    (async () => {
      const {
        data: { getAutoComplete: autoCompleteResult },
      } = await graphClient.query({
        query: getAutoComplete,
        variables: { keywords: searchKeyword, limit: limit },
      });

      setSearchResult(autoCompleteResult);
    })();
  }, [searchKeyword]);

  return searchResult;
};

export default useAutoComplete;
