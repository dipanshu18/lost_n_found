import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

import ItemCard from "@/components/ItemCard";

export default function Dashboard() {
  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold text-center my-10">
          Lost items by others
        </h1>

        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 m-10">
          <ItemCard cardType="lost" />
          <ItemCard cardType="lost" />
          <ItemCard cardType="lost" />
          <ItemCard cardType="lost" />
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold text-center my-10">Found items</h1>

        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 m-10">
          <ItemCard cardType="found" />
          <ItemCard cardType="found" />
          <ItemCard cardType="found" />
          <ItemCard cardType="found" />
        </div>
      </section>
    </div>
  );
}
