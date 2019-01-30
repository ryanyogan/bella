import * as path from "path";
import * as glob from "glob";
// import fs from "fs";
import { mergeResolvers } from "merge-graphql-schemas";

export const mergeSchemas = () => {
  const pathToModules = path.join(__dirname, "../modules");
  const resolvers = glob
    .sync(`${pathToModules}/**/resolvers.?s`)
    .map(resolver => require(resolver).resolvers);

  return {
    resolvers: mergeResolvers(resolvers)
  };
};
