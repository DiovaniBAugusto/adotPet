import { PrismaClient } from "@prisma/client";
import { UserServiceProps } from "./interfaces/UserServiceInterface";
import { IUser } from "./interfaces/UserInterface";

const prisma = new PrismaClient();

class GetUserService implements UserServiceProps {
  async handle(user: IUser): Promise<IUser | null> {
    if (!user.email) {
      throw new Error("invalid data provided");
    }

    const getUser: IUser | null = await prisma.user
      .findFirst({
        where: {
          email: user.email,
        },
      })
      .catch((err) => {
        throw new Error("Internal Error");
      });

    return getUser;
  }
}

export { GetUserService };
