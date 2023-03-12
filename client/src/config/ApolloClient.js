/* eslint-disable no-console */
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { parseCookies } from 'nookies';

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) =>
      // console.log(new Error({ message, location, path })),
      console.error({ message, location, path }),
    );
  } else if (networkError) {
    const { message, name, respose, result, bodyText, stack, statusCode } =
      networkError;
    console.log(
      new Error({
        message,
        name,
        respose,
        result,
        bodyText,
        stack,
        statusCode,
      }),
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/v1/graph`,
  }),
]);

const getApolloLink = (token) => {
  const cookies = parseCookies();
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: token || cookies?.firebaseToken || '',
    },
  }));
  return authLink.concat(link);
};

const client = new ApolloClient({
  cache,
  link: getApolloLink(),
  name: 'monday-morning-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

const ProviderWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { client as GraphClient, getApolloLink };

export default ProviderWrapper;
