import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../utils/hashPasswords";
import transporter from "../utils/emails/email";
import jwt from "jsonwebtoken";

const userClient = new PrismaClient().user;
const secretKey = "bMJKWMp";

export async function userSignup(req: Request, res: Response) {
  try {
    const { name, email, phoneNo, password } = req.body;

    if (!name || !email || !phoneNo || !password) {
      res.status(401).json({ error: "Please enter all the details" });
    }

    const existingUser = await userClient.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await userClient.create({
      data: {
        name,
        email,
        phoneNo,
        password: hashedPassword,
      },
    });

    if (newUser) {
      const confirmationMail = await transporter.sendMail({
        from: '"Dipanshu" <torawanedipanshu@gmail.com>', // sender address
        to: newUser.email, // list of receivers
        subject: "Thanks for signing up!", // Subject line
        text: "Registeration Confirmation. Thank you for choosing Lost and Found. Your account is successfully created on our web app, so now you can login and explore what we have to offer. Also we always aim to provide as much value to our users so that they have a great experience using our software and we appreciate that support.",
        html: { path: "src/utils/emails/thankyou/index.html" },
      });

      console.log("Message sent: %s", confirmationMail.messageId);

      const token = jwt.sign({ userId: newUser.id }, secretKey);
      res.cookie("token", token, { httpOnly: true });
    }

    res.json(newUser);
  } catch (err) {
    console.error(err); // Log the error to the console for debugging purposes
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUserProfile(req: Request, res: Response) {
  try {
    const { userId } = req.body;

    const currentUser = await userClient.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNo: true,
      },
    });

    if (currentUser) {
      res.status(200).json(currentUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateProfile(req: Request, res: Response) {
  try {
    const { userId } = req.body;

    const user = await userClient.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateData = req.body;
    const newHashedPassword = await hashPassword(updateData.password);
    const updatedUser = await userClient.update({
      where: {
        id: userId,
      },
      data: {
        id: userId,
        name: updateData.name,
        phoneNo: updateData.phoneNo,
        email: updateData.email,
        password: newHashedPassword,
      }, // Updated user data
    });

    if (updatedUser) {
      res.status(200).json(updatedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUserId(req: Request, res: Response) {
  const { userId } = req.body;
  if (userId) {
    return res.status(200).json(userId);
  }
  res.status(404).json({ msg: "User ID not found" });
}
