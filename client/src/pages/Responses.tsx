import Navbar from "../components/Navbar";
import ResponseCard from "../components/ResponseCard";

export default function Responses() {
  return (
    <>
      <Navbar />
      <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ResponseCard />
        <ResponseCard />
        <ResponseCard />
        <ResponseCard />
        <ResponseCard />
        <ResponseCard />
        <ResponseCard />
      </div>
    </>
  );
}
