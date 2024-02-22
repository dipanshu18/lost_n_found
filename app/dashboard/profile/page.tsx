import Link from "next/link";
import type { Metadata } from "next";
import { userProfileType } from "@/types";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
export const metadata: Metadata = {
  title: "Profile",
};

const userClient = new PrismaClient().user;

// export async function getUserProfile({
//   email,
// }: {
//   email: string;
// }): Promise<userProfileType> {
//   try {
//     const user = await userClient.findUnique({ where: { email } });

//     if (user) {
//       return user;
//     }
//   } catch (error) {
//     console.error("Error fetching user profile:", error);
//   }
// }

export default async function Profile() {
  // const session = await getServerSession();
  // const { name, email, phoneNo } = await getUserProfile({
  //   email: session?.user?.email as string,
  // });

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

              {/* <div className="text-xl font-bold">{name}</div> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone no</span>
              </label>

              {/* <div className="text-xl font-bold">{phoneNo}</div> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/* <div className="text-xl font-bold">{email}</div> */}
            </div>

            <div className="form-control mt-6">
              <Link href="/dashboard/profile/:id">
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
