import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../utils/hashPasswords";
import jwt from "jsonwebtoken";

const userClient = new PrismaClient().user;
const secretKey = "bMJKWMp";

export async function userSignup(req: Request, res: Response) {
  try {
    const { name, email, phoneNo, password } = req.body;
    const hashedPassword = await hashPassword(password);
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

    const newUser = await userClient.create({
      data: {
        name,
        email,
        phoneNo,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: newUser.id }, secretKey);
    res.cookie("token", token, { httpOnly: true });
    res.json(newUser);
  } catch (err) {
    console.error(err); // Log the error to the console for debugging purposes
    res.status(500).json({ error: "Internal server error" });
  }
}
