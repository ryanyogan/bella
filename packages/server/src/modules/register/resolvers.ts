import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { ResolverMap } from "../../utils";
import { registerSchema } from "../../schemas/yupSchema";
import { formatYupError } from "../../utils/formatYupErrors";

export const resolvers: ResolverMap = {
  Mutation: {
    register: async (_, { input }, { prisma, res }) => {
      try {
        await registerSchema.validate(input, {
          abortEarly: false
        });
      } catch (error) {
        return { errors: formatYupError(error) };
      }

      const hashedPassword = await bcrypt.hash(input.password, 10);

      const user = await prisma.createUser({
        email: input.email,
        password: hashedPassword
      });

      const token = jwt.sign(
        {
          userId: user.id
        },
        "changethistoENVvarSecret"
      );

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 265
      });

      return user;
    }
  }
};
