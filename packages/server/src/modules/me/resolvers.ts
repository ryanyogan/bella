import { IResolvers } from "graphql-middleware/dist/types";

export const resolvers: IResolvers = {
  Query: {
    me: async (_, __, { prisma, req }) => {
      if (!req.userId) {
        return null;
      }

      return prisma.user({
        id: req.userId
      });
    }
  },
  User: {
    dogs: ({ id }, _, { prisma }) =>
      prisma.dogs({
        where: {
          owner: { id }
        }
      })
  }
};
