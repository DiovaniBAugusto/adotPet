import { Request, Response } from "express";

export interface AuthVerificationProps {
  handle: (req: Request, res: Response) => Promise<Response | any>;
}
