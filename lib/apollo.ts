import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://marketinglad.co.in/graphql',
  cache: new InMemoryCache(),
});

export default client;