import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Profile",
};

import UpdateProfileForm from "@/components/UpdateProfileForm";

export default function UpdateProfile() {
  return (
    <>
      <UpdateProfileForm />
    </>
  );
}
