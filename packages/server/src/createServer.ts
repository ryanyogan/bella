import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import { mergeSchemas } from "./utils/mergeSchemas";

const { resolvers } = mergeSchemas();

export const createServer = () =>
  new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, prisma })
  });
