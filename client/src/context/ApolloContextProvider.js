import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
  getApolloContext,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import React, { useContext, useEffect } from 'react';
import { authContext } from './AuthContextProvider';

export const apolloContext = getApolloContext();

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) =>
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
    credentials: 'include',
  }),
]);

const getApolloLink = (useApiKey = false, token) => {
  const cookies = parseCookies();

  const authLink = setContext((_, { headers }) =>
    useApiKey
      ? {
          headers: {
            ...headers,
            'x-api-key': process.env.SERVER_ACCESS_API_KEY,
          },
        }
      : {
          headers: {
            ...headers,
            Authorization: token || cookies?.firebaseToken || '',
          },
        },
  );
  return authLink.concat(link);
};

const getGraphClient = (useApiKey = false, token) => {
  return new ApolloClient({
    cache,
    link: getApolloLink(useApiKey, token),
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
};

export { getApolloLink, getGraphClient };

const ApolloContextProvider = ({ children }) => {
  const { user } = useContext(authContext);

  const client = getGraphClient(false, user?.firebaseToken);

  useEffect(() => {
    console.log('apolloClient', user?.firebaseToken);

    client.setLink(
      getApolloLink(false, user?.firebaseToken ?? user?.accessToken),
    );

    if (user?.firebaseToken || user?.accessToken) {
      setCookie(
        null,
        'firebaseToken',
        user?.firebaseToken ?? user?.accessToken,
        {
          secure: true,
          sameSite: true,
          maxAge: 3600,
        },
      );
    } else {
      destroyCookie(null, 'firebaseToken');
    }
  }, [user]);

  return (
    <apolloContext.Provider value={client} client={client}>
      {children}
    </apolloContext.Provider>
  );
};

export default ApolloContextProvider;
