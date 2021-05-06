import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://server.mondaymorning.nitrkl.ac.in'
        : 'http://localhost:8000/graphql',
    // : 'http://mm.server1.dashnet.in/v1/graph',
  }),
]);

const client = new ApolloClient({
  cache,
  link,
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

export default ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
