import { NextResponse } from "next/server";
import { signupUserSchema } from "@/types";
import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().user;

export async function POST(res: Response) {
  const result = signupUserSchema.safeParse(await res.json());

  if (result.success) {
    const { name, phoneNo, email, password } = result.data;

    const userExists = await userClient.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return NextResponse.json({
        message:
          "User already exists with this email! Please use a different one...",
      });
    }

    const hashedPassword = await hash(password, 10);
    const createUser = await userClient.create({
      data: { name, phoneNo, email, password: hashedPassword },
    });

    if (createUser) {
      return NextResponse.json({ message: "User created successfully..." });
    }

    return NextResponse.json({
      message: "Error while creating user with provided credentials...",
    });
  }
}
