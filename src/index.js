const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const mocks = require("./mocks");
// const TrackAPI = require("./datasources/track-api");

const { buildSubgraphSchema } = require("@apollo/subgraph");
const { ApolloServer, gql } = require("apollo-server");
const { readFileSync } = require("fs");

const typeDefs = gql(readFileSync("./schema.graphql", { encoding: "utf-8" }));

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    mocks,
    // dataSources: () => {
    //   return {
    //     trackAPI: new TrackAPI(),
    //   };
    // },
  });

  const subgraphName = "schema";

  const { url, port } = await server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
      console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
    })
    .catch((err) => {
      console.error(err);
    });

  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);
