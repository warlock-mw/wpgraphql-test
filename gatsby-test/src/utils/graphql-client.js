import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const GraphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${process.env.WORDPRESS_GRAPHQL_URL}`,
  })
});

export default GraphqlClient