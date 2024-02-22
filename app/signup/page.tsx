import type { Metadata } from "next";

import SignupForm from "@/components/SignupForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Create an account",
};

export default async function Signup() {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return <SignupForm />;
}
