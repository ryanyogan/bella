import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { ResolverMap } from "../../utils";

export const resolvers: ResolverMap = {
  Mutation: {
    login: async (_, { input }, { prisma, res }) => {
      const { email, password } = input;

      const user = await prisma.user({ email });

      if (!user) {
        return {
          errors: [
            {
              path: "email",
              message: "invalid credentials"
            }
          ]
        };
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return {
          errors: [
            {
              path: "password",
              message: "invalid credentials"
            }
          ]
        };
      }

      const token = jwt.sign(
        {
          userId: user.id
        },
        "randomtokenapp"
      );

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365
      });

      return {
        user
      };
    }
  }
};
