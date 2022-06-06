import { prisma } from "./lib/dbClient";
import { UserServiceProps } from "./interfaces/UserService-Interface";
import { IUser } from "./interfaces/UserInterface";

class CreateUserService implements UserServiceProps {
  async handle(user: IUser): Promise<IUser> {
    if (!user.username || !user.password || !user.email) {
      throw new Error("invalid data provided");
    }

    const createdUser: IUser = await prisma.user
      .create({
        data: {
          username: user.username,
          email: user.email,
          password: user.password,
          userRole: "usuario",
        },
      })
      .catch((error) => {
        if (error.code == "P2002") {
          throw new Error("Username or email already exists!");
        } else {
          throw new Error("Internal error.");
        }
      });

    return createdUser;
  }
}

export { CreateUserService };
