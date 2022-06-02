import { Router } from "express";
import { CreateUser, AuthUser, LogoutUser } from "../controllers/User";

const authRouter = Router();

authRouter.post("/user", new CreateUser().handle);
authRouter.post("/login", new AuthUser().handle);
authRouter.get("/logout", new LogoutUser().handle);
authRouter.get("/ping", (req, res) => {
  res.json({ response: "pong" });
});

export { authRouter };
