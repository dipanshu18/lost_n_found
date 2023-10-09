import { userSignup } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", userSignup);

export default userRouter;
