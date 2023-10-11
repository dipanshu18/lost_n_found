import { verifyToken } from "../middlewares/auth.middleware";
import {
  createItemPost,
  deleteItemPost,
  editItemPost,
  getItem,
  getItems,
  getUserItems,
} from "../controllers/item.controller";
import { Router } from "express";

const itemRouter = Router();

itemRouter.get("/items", verifyToken, getItems);

itemRouter.get("/user/items", verifyToken, getUserItems);

itemRouter.get("/item/:id", verifyToken, getItem);

itemRouter.post("/item", verifyToken, createItemPost);

itemRouter.put("/item/:id", verifyToken, editItemPost);

itemRouter.delete("/item/:id", verifyToken, deleteItemPost);

export default itemRouter;
