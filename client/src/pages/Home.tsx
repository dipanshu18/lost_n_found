import LostItemCard from "../components/LostitemCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <LostItemCard />
        <LostItemCard />
        <LostItemCard />
        <LostItemCard />
        <LostItemCard />
        <LostItemCard />
        <LostItemCard />
        <LostItemCard />
        <LostItemCard />
        <LostItemCard />
      </div>
    </>
  );
}
