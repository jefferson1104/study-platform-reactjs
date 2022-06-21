import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl0q4x0d9u01xm11zsf4bj/master',
  cache: new InMemoryCache()
})