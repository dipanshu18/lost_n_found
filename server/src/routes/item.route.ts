import {
  createItemPost,
  deleteItemPost,
  editItemPost,
  getItem,
  getItems,
} from "../controllers/item.controller";
import { Router } from "express";

const itemRouter = Router();

itemRouter.get("/items", getItems);

itemRouter.get("/item/:id", getItem);

itemRouter.post("/item", createItemPost);

itemRouter.put("/item/:id", editItemPost);

itemRouter.delete("/item/:id", deleteItemPost);

export default itemRouter;
