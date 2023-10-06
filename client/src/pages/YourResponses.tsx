import Navbar from "../components/Navbar";
import YourResponseCard from "../components/YourResponseCard";

export default function YourResponses() {
  return (
    <>
      <Navbar />
      <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <YourResponseCard />
        <YourResponseCard />
        <YourResponseCard />
        <YourResponseCard />
        <YourResponseCard />
        <YourResponseCard />
        <YourResponseCard />
      </div>
    </>
  );
}
