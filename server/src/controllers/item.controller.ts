import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const itemClient = new PrismaClient().post;

export async function getItems(req: Request, res: Response) {
  try {
    const allPosts = await itemClient.findMany({
      include: {
        owner: {
          select: {
            name: true,
          },
        },
      },
    });

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

export async function getUserItem(req: Request, res: Response) {
  const { userId } = req.body;
  const { id } = req.params;

  try {
    const userPost = await itemClient.findUnique({
      where: {
        ownerId: userId,
        id,
      },
    });

    if (userPost) {
      res.status(200).json(userPost);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getItem(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const postDetail = await itemClient.findUnique({
      where: {
        id,
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    res.status(200).json(postDetail);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
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

export async function editItemPost(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const updatedInfo = req.body;

    const post = await itemClient.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return res.status(404).json({ msg: "No item found with that ID" });
    }

    const updatedPost = await itemClient.update({
      where: {
        id,
      },
      data: {
        id,
        ownerId: userId,
        name: updatedInfo.name,
        description: updatedInfo.description,
        lostLocation: updatedInfo.lostLocation,
        imageUrl: updatedInfo.imageUrl,
      },
    });

    if (updatedPost) {
      res.status(201).json(updatedPost);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteItemPost(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const post = await itemClient.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return res.status(404).json({ msg: "No item found with that ID" });
    }

    const deletedPost = await itemClient.delete({
      where: {
        id,
        ownerId: userId,
      },
    });

    if (deletedPost) {
      res.status(200).json({ msg: "Deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
