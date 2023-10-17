import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import transporter from "../utils/emails/email";

const userClient = new PrismaClient().user;
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
    const founder = await userClient.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
      },
    });

    // Fetch the validatingQuestion from the associated Post
    const post = await postClient.findUnique({
      where: { id: itemId },
      select: {
        name: true,
        validatingQuestion: true,
        owner: {
          select: {
            name: true,
            email: true,
          },
        },
      },
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

    if (response && founder) {
      const successfulResponse = await transporter.sendMail({
        from: `"Lost and Found" <noreply.Landf@gmail.com>`, // sender address
        to: `${post.owner.email}`, // list of receivers
        subject: `Hey your lost item post for " ${post.name} " has a response.`, // Subject line
        text: `Your Lost Item " ${post.name} " has a response from user named ${founder?.name}. So now you can login and see if the response you have gotten is correct. If correct, you can approve the response and the founder can see your contact no. and discuss about returning your lost belongings.`,
        html: `
          <h5>Your Lost Item <strong>" ${post.name} "</strong> has a response from user named <strong>${founder?.name}</strong></h5>
          <div>
            <p>
              So now you can login and see if the response you have gotten is correct. If correct, you can approve the response and the founder can see your contact no. and discuss about returning your lost belongings.
            </p>
          </div>
        `,
      });
      console.log("Message sent: %s", successfulResponse.messageId);

      const yourResponseConfirmation = await transporter.sendMail({
        from: `"Lost and Found" <noreply.Landf@gmail.com>`, // sender address
        to: `${founder.email}`, // list of receivers
        subject: `Hey, ${founder.name} your response is successfully sent for lost item post " ${post.name} " by ${post.owner.name}.`, // Subject line
        text: `Your response for lost Item " ${post.name} " by ${post.owner.name} has been successfully sent to the owner named ${post.owner.name}. So now you can login and see if your response gets approved. If approve, you can see the owner's contact no. and discuss about returning the lost item.`,
        html: `
          <h5>Your response for lost Item " ${post.name} " by ${post.owner.name} has been successfully sent to the owner named ${post.owner.name}. </h5>
          <div>
            <p>
              So now you can login and see if your response gets approved. If approve, you can see the owner's contact no. and discuss about returning the lost item.
            </p>
          </div>
        `,
      });
      console.log("Message sent: %s", yourResponseConfirmation.messageId);
      res.status(200).json(response);
    }
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

    const PostDetails = await postClient.findUnique({
      where: {
        id: itemId,
      },
      select: {
        name: true,
        owner: {
          select: {
            name: true,
          },
        },
      },
    });

    const founderDetails = await responseClient.findUnique({
      where: {
        id: responseId,
      },
      select: {
        founder: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    console.log(founderDetails);

    if (response) {
      const confirmationMail = await transporter.sendMail({
        from: `"Lost and Found" <noreply.Landf@gmail.com>`, // sender address
        to: `${founderDetails?.founder.email}`, // list of receivers
        subject: `Hey ${founderDetails?.founder.name}, your response is approved by ${PostDetails?.owner.name}!`, // Subject line
        text: `Congratulations your response is approved. Thank you for choosing Lost and Found. Your response is approved by the Owner of the item ${PostDetails?.name}, so now you can login and see the contact number of the owner to discuss how to deliver their lost belongings. Also thanks for using our app, showing patience for finding their lost belongings and we hope you deliver item as soon as possible and we appreciate that support.`,
        html: `
          <h1>Congratulations your response is approved.</h1>
          <div>
            <p>
              <strong>Thankyou for choosing Lost and Found.</strong> Your response is approved by the Owner of the item ${PostDetails?.name}, so now you can login and see the contact number of the owner to discuss how to deliver their lost belongings. Also thanks for using our app, showing patience for finding their lost belongings and we hope you deliver item as soon as possible and we appreciate that support.
            </p>
          </div>
        `,
      });

      console.log("Message sent: %s", confirmationMail.messageId);
    }

    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}
