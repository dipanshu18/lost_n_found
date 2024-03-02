import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const userClient = new PrismaClient().user;

export async function PUT(req: Request, { params }: { params: any }) {
  const id = params.userId;
  const updatedInfo = await req.json();

  try {
    const updateUser = await userClient.update({
      where: {
        id,
      },
      data: updatedInfo,
    });

    if (updateUser) {
      return NextResponse.json({ message: "Updated user info successfully" });
    } else {
      return NextResponse.json({
        message: "Something went wrong while update user info",
      });
    }
  } catch (e) {
    console.log(e);
  }
}
