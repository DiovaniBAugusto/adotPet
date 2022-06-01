import { Router } from "express";
import { CreateUser } from "../controllers/User/CreateUser";
import { AuthUser } from "../controllers/User/AuthUser";

const userRouter = Router();

userRouter.post("/user", new CreateUser().handle);
userRouter.post("/auth", new AuthUser().handle);

export { userRouter };
