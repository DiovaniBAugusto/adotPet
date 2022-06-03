import { Router } from "express";
import {
  CreateUser,
  AuthUser,
  LogoutUser,
  AuthVerification,
} from "../controllers/User";

const authRouter = Router();

authRouter.post("/register", new CreateUser().handle);
authRouter.post("/login", new AuthUser().handle);
authRouter.get("/logout", new LogoutUser().handle);
authRouter.get("/auth", new AuthVerification().handle);

export { authRouter };
