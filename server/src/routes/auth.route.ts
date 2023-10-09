import { loginUser, logoutUser } from "../controllers/auth.controller";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", loginUser);

authRouter.post("/logout", logoutUser);

export default authRouter;
