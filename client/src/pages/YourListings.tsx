import Navbar from "../components/Navbar";
import YourListingsCard from "../components/YourListingsCard";

export default function YourListings() {
  return (
    <>
      <Navbar />
      <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <YourListingsCard />
        <YourListingsCard />
        <YourListingsCard />
        <YourListingsCard />
        <YourListingsCard />
      </div>
    </>
  );
}
