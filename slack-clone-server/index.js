const express = require('express');
const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server-express');

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const PORT = 8081;

const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

models.sequelize.sync({}).then(() => {
  app.listen(8081);
});
