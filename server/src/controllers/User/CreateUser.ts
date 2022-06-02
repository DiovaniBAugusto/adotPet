import { Request, Response } from "express";
import { CreateUserService } from "../../service";
import bcrypt from "bcrypt";
import { CreateUserProps } from "./interface/CreateUser-Interface";

class CreateUser implements CreateUserProps {
  async handle(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const personToCreate = { username, email, password };
    personToCreate.password = bcrypt.hashSync(password, 8);

    try {
      const user = await new CreateUserService().handle(personToCreate);
      delete user.password;
      return res.json(user);
    } catch (error: any) {
      res.status(500).json({
        error: {
          message: error.message,
        },
      });
    }
  }
}

export { CreateUser };
