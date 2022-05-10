import { Router } from "express";
import {teste} from '../service/userServices'


const router = Router();

router.get("/user", teste)

export default router;