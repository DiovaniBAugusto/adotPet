import { Request, Response } from "express";
import { AuthUserProps } from "./interface/AuthUser-Interface";

export class LogoutUser implements AuthUserProps {
  async handle(req: Request, res: Response) {
    req.session.destroy;
    res.json({ msg: "successfully logout" });
  }
}
