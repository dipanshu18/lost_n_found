import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import transporter from "../utils/emails/email";

const userClient = new PrismaClient().user;
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
    const emails = await userClient.findMany({
      select: {
        email: true,
      },
    });

    const emailArr: string[] = [];
    if (emails) {
      for (let i = 0; i < emails.length; i++) {
        emailArr.push(emails[i].email);
      }
    }

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
      const confirmationMail = await transporter.sendMail({
        from: `"Lost and Found" <noreply.Landf@gmail.com>`, // sender address
        to: `${emailArr}`, // list of receivers
        subject: "Hey a lost item is posted!", // Subject line
        text: "New Lost Item Posted. Thank you for choosing Lost and Found. The new lost item is successfully listed on our app homepage, so now you can login and see if you can find the item. Also thanks for using our app, showing patience for posting about your lost belongings and we hope you find your item as soon as possible and we appreciate that support.",
        html: `
          <h1>New Lost Item Posted.</h1>
          <div>
            <p>
              <strong>Thankyou for choosing Lost and Found.</strong> The new lost item is successfully listed on our app homepage, so now you can login and see if you can find the item. Also thanks for using our app, showing patience for posting about your lost belongings and we hope you find your item as soon as possible and we appreciate that support.
            </p>
          </div>
        `,
      });

      console.log("Message sent: %s", confirmationMail.messageId);
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
