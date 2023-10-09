import { Request, Response } from "express";

export function getItems(req: Request, res: Response) {
  res.json({ msg: "Items List" });
}

export function getItem(req: Request, res: Response) {
  res.json({ msg: "An Item Details" });
}

export function createItemPost(req: Request, res: Response) {
  res.json({ msg: "Creating an item listing" });
}

export function editItemPost(req: Request, res: Response) {
  res.json({ msg: "Updating the item details" });
}

export function deleteItemPost(req: Request, res: Response) {
  res.json({ msg: "Deleting the Item Post" });
}
