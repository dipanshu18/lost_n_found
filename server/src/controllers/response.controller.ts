import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const postClient = new PrismaClient().post;
const responseClient = new PrismaClient().response;

export async function getUserResponses(req: Request, res: Response) {
  const { userId } = req.body;

  try {
    const userResponses = await responseClient.findMany({
      where: {
        founderId: userId,
      },
      select: {
        validatingQuestion: true,
        answer: true,
        approved: true,
        updatedAt: true,
        post: {
          select: {
            name: true,
            imageUrl: true,
            owner: {
              select: {
                name: true,
                phoneNo: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(userResponses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function getAResponse(req: Request, res: Response) {
  const { postId } = req.params;
  const { userId } = req.body;

  try {
    const response = await responseClient.findMany({
      where: {
        founderId: userId,
        postId,
      },
    });

    if (response) {
      res.status(200).json(response);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function getItemResponses(req: Request, res: Response) {
  const { itemId } = req.params;

  try {
    const post = await postClient.findUnique({
      where: { id: itemId },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const postResponses = await responseClient.findMany({
      where: {
        postId: itemId,
      },
      select: {
        founder: {
          select: {
            name: true,
            email: true,
            phoneNo: true,
          },
        },
        id: true,
        postId: true,
        validatingQuestion: true,
        answer: true,
        approved: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(200).json(postResponses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function createResponse(req: Request, res: Response) {
  const { itemId } = req.params;
  const { userId, answer } = req.body;

  try {
    // Fetch the validatingQuestion from the associated Post
    const post = await postClient.findUnique({
      where: { id: itemId },
      select: { validatingQuestion: true },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Now create the response with the validatingQuestion
    const response = await responseClient.create({
      data: {
        postId: itemId,
        founderId: userId,
        validatingQuestion: post.validatingQuestion,
        answer,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function approveResponse(req: Request, res: Response) {
  const { responseId, itemId } = req.params;

  try {
    // Fetch the validatingQuestion from the associated Post
    const post = await postClient.findUnique({
      where: { id: itemId },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Now update the response with the approved attribute
    const response = await responseClient.update({
      where: {
        id: responseId,
        postId: itemId,
      },
      data: {
        approved: true,
      },
    });

    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}
