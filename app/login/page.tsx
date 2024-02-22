import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Login() {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }

  return <LoginForm />;
}
