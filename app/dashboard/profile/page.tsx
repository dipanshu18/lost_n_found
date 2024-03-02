import Link from "next/link";
import type { Metadata } from "next";

import { userProfileType } from "@/types";
import { getServerSession } from "next-auth";

import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Profile",
};

async function getUserProfile(
  email: string
): Promise<userProfileType | undefined> {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    return user;
  }
}

export default async function Profile() {
  const session = await getServerSession();

  const data = await getUserProfile(session?.user?.email as string);

  if (!data) {
    return (
      <h1 className="text-center my-10 text-3xl font-semibold">
        No user found...
      </h1>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold my-10">Your profile...</h1>
        </div>
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <div className="text-xl font-bold">{data.name}</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone no</span>
              </label>

              <div className="text-xl font-bold">{data?.phoneNo}</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="text-xl font-bold">{data?.email}</div>
            </div>

            <div className="form-control mt-6">
              <Link href={`/dashboard/profile/${data.id}`}>
                <button className="btn btn-primary-content w-full">
                  Update
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
