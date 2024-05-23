import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://marketinglad.co.in/graphql',
  cache: new InMemoryCache(),
});

export default client;