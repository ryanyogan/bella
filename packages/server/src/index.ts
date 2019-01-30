import * as jwt from "jsonwebtoken";
import * as cookieParser from "cookie-parser";
import { createServer } from "./createServer";
import { prisma } from "./generated/prisma-client";
import { Request } from "express";

export interface MyRequest extends Request {
  userId?: string;
  user?: object;
}
const server = createServer();

server.express.use(cookieParser());

server.express.use(
  (req: MyRequest, _, next): void => {
    const { token } = req.cookies;
    if (token) {
      const { userId }: any = jwt.verify(token, process.env.APP_SECRET as any);
      req.userId = userId;
    }

    next();
  }
);

server.express.use(async (req: MyRequest, _, next) => {
  if (!req.userId) return next();

  const user = await prisma.user({ id: req.userId });
  req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL as any
    }
  },
  info => {
    console.log(`Server is now running at http://localhost:${info.port}`);
  }
);
