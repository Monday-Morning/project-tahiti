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
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://mondaymorning.nitrkl.ac.in/api/v1/graph'
        : 'https://project-reclamation-staging.herokuapp.com/v1/graph',
  }),
]);

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: '',
  },
}));

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
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

const ProviderWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export { client as GraphClient };

export default ProviderWrapper;
