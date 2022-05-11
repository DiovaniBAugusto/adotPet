import { Router } from "express";
// import {teste} from '../service/userServices'


const userRouter = Router();

userRouter.get("/user", (req, res) => {
    res.json({ funcionou: true })
})

export { userRouter };