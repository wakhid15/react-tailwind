import { ApolloClient, InMemoryCache } from "@apollo/client";

const GraphQLClient = new ApolloClient({
  uri: "https://evident-mite-12.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'rawalrb87BiRuMkjpdwfwZ6uDeSqobvjR5hmeq2P4nLYJzxDDJeBfe6abdKZOH5z' // Replace with your actual admin secret key
  }
});

export default GraphQLClient;
