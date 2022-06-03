import { Request, Response } from "express";
import { GetUserService } from "../../service";
import bcrypt from "bcrypt";
import { AuthUserProps } from "./interface/AuthUser-Interface";
declare module "express-session" {
  interface SessionData {
    userId: string | null;
    username: string | null;
  }
}
class AuthUser implements AuthUserProps {
  async handle(req: Request, res: Response): Promise<Response | any> {
    const { email, password } = req.body;
    const personToAuth = { email, password };
    try {
      const user = await new GetUserService().handle(personToAuth);

      if (!user) {
        throw new Error("invalid email");
      }

      if (!bcrypt.compareSync(password, user?.password as string)) {
        throw new Error("invalid password");
      }

      const { id, username, email } = user;
      req.session.userId = id;
      req.session.username = username;
      res.status(200).json({ id, username, email });
    } catch (err: any) {
      res.status(500).json({
        err: {
          message: err.message,
        },
      });
    }
  }
}

export { AuthUser };
