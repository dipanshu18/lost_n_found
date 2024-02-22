import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gotten responses",
};

import ResponseCard from "@/components/ResponseCard";

export default function Responses() {
  return (
    <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 m-10">
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
    </div>
  );
}
