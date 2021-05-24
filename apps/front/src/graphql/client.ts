
import ApolloClient from "apollo-boost";

const graphql = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer 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"
  }
});

export default graphql;
