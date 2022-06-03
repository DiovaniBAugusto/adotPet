import { Request, Response } from "express";
import { GetSessionData } from "../../service/GetSessionData";
import { AuthVerificationProps } from "./interface/AuthVerification-Interface";

class AuthVerification implements AuthVerificationProps {
  async handle(req: Request, res: Response) {
    if (!req.session.userId) {
      res.json({ res: false, msg: "session not found" });
      return;
    }

    const sessionData = await new GetSessionData().handle(req.sessionID);

    if (!sessionData) {
      res.json({ res: false, msg: "session don't exist" });
      return;
    }

    if (sessionData.expire <= new Date()) {
      req.session.destroy;
      res.json({ res: false, msg: "session expire" });
      return;
    }

    res.json({ res: true, msg: "user is authenticated" });
  }
}

export { AuthVerification };
