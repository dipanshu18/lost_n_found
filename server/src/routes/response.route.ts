import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import {
  createResponse,
  getItemResponses,
  getUserResponses,
  approveResponse,
} from "../controllers/response.controller";

const responseRouter = Router();

responseRouter.get("/user/responses", verifyToken, getUserResponses);

responseRouter.get("/response/:itemId", verifyToken, getItemResponses);

responseRouter.post("/response/:itemId", verifyToken, createResponse);

responseRouter.put(
  "/response/:responseId/:itemId",
  verifyToken,
  approveResponse
);

export default responseRouter;
