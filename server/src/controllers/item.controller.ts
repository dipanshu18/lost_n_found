import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const itemClient = new PrismaClient().post;

export async function getItems(req: Request, res: Response) {
  try {
    const allPosts = await itemClient.findMany();

    if (!allPosts) {
      return res.status(404).json({ msg: "No items listed" });
    }

    res.status(200).json(allPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUserItems(req: Request, res: Response) {
  const { userId } = req.body;

  try {
    const userPosts = await itemClient.findMany({
      where: {
        ownerId: userId,
      },
    });

    if (userPosts) {
      res.status(200).json(userPosts);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export function getItem(req: Request, res: Response) {
  res.json({ msg: "An Item Details" });
}

export async function createItemPost(req: Request, res: Response) {
  const { userId } = req.body;
  const { name, description, imageUrl, lostLocation, validatingQuestion } =
    req.body;
  try {
    const createPost = await itemClient.create({
      data: {
        name,
        description,
        imageUrl,
        lostLocation,
        validatingQuestion,
        ownerId: userId,
      },
    });

    if (createPost) {
      res.status(200).json(createPost);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export function editItemPost(req: Request, res: Response) {
  res.json({ msg: "Updating the item details" });
}

export function deleteItemPost(req: Request, res: Response) {
  res.json({ msg: "Deleting the Item Post" });
}
