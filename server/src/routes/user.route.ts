import { verifyToken } from "../middlewares/auth.middleware";
import {
  userSignup,
  getUserProfile,
  updateProfile,
  getUserId,
} from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", userSignup);

userRouter.get("/profile", verifyToken, getUserProfile);

userRouter.put("/profile", verifyToken, updateProfile);

userRouter.get("/userId", verifyToken, getUserId);

export default userRouter;
