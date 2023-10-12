import { useEffect, useState } from "react";
import LostItemCard from "../components/LostitemCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Home() {
  const [lostItems, setLostItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLostItems() {
      setLoading(true);
      const request = await axios.get("/api/items");

      if (request.status === 200) {
        setLoading(false);
        setLostItems(request.data);
      }
    }

    getLostItems();
  }, []);

  return (
    <>
      <Navbar />
      {loading && (
        <div className="flex my-20 justify-center items-center">
          <Spinner />
        </div>
      )}
      <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {lostItems &&
          lostItems.map((lostItem) => (
            <LostItemCard key={lostItem.id} item={lostItem} />
          ))}
      </div>
    </>
  );
}
