import { Prisma } from "./generated/prisma-client";
import { Request, Response } from "express-serve-static-core";

export interface ServerResponseRequest {
  req: Request;
  res: Response;
}

export interface Context extends ServerResponseRequest {
  prisma: Prisma;
  url?: string;
}

export type Resolver = (
  parent: any,
  args: any,
  context: Context,
  info?: any // Does new Prisma Client expose this anymore?
) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}
