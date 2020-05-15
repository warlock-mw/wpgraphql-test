import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import GraphqlClient from '@/utils/graphql-client';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={GraphqlClient}>{element}</ApolloProvider>
)