import SignupForm from "@/components/SignupForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an account",
};

export default function Signup() {
  return (
    <>
      <SignupForm />
    </>
  );
}
