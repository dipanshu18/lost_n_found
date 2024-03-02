import type { Metadata } from "next";
import { PrismaClient } from "@prisma/client";

export const metadata: Metadata = {
  title: "Update Profile",
};

import UpdateProfileForm from "@/components/UpdateProfileForm";
import { userProfileType } from "@/types";

import prisma from "@/lib/prisma";

async function getUserProfile(
  id: string
): Promise<userProfileType | undefined> {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (user) {
    return user;
  }
}

export default async function UpdateProfile({
  params,
}: {
  params: { id: string };
}) {
  const data = await getUserProfile(params.id);

  if (!data) {
    return (
      <h1 className="text-center my-10 text-3xl font-semibold">
        No user found...
      </h1>
    );
  }

  return (
    <>
      <UpdateProfileForm user={data} />
    </>
  );
}
