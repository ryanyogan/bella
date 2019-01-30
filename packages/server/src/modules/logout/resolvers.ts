import { ResolverMap } from "../../utils";
import { Request } from "express";
import { Response } from "express-serve-static-core";

interface IRequest extends Request {
  user?: string;
  userId?: string;
}

export const resolvers: ResolverMap = {
  Mutation: {
    logout: (_, __, { req, res }: { req: IRequest; res: Response }) => {
      delete req.user;
      delete req.userId;

      res.clearCookie("token");

      return true;
    }
  }
};
