import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { verifyPassword } from "../utils/hashPasswords";

const secretKey: string = process.env.SECRET || "bMJKWMp";

const userClient = new PrismaClient().user;

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all the fields!" });
    }

    const user = await userClient.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    if (user && (await verifyPassword(password, user.password))) {
      const token = jwt.sign({ userId: user?.id }, secretKey);
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ msg: "Logged in successfully." });
    } else {
      res.status(401).json({ msg: "Password entered is incorrect!" });
    }
  } catch (err) {
    console.error(err); // Log the error to the console for debugging purposes
    res.status(500).json({ error: "Internal server error" });
  }
}

export function logoutUser(req: Request, res: Response) {
  res.clearCookie("token");

  res.status(200).json({ msg: "Logged out successfully." });
}
