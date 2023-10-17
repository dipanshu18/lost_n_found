import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import YourListingsCard from "../components/YourListingsCard";
import axios from "axios";
import Spinner from "../components/Spinner";

import { listingProps } from "../components/YourListingsCard";

export default function YourListings() {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUserPosts() {
      setLoading(true);
      const request = await axios.get("/api/user/items");

      if (request.status === 200) {
        setLoading(false);
        setUserPosts(request.data);
      }
    }

    getUserPosts();
  }, []);

  return (
    <>
      <Navbar />
      {loading && (
        <div className="flex  my-20 justify-center items-center">
          <Spinner />
        </div>
      )}
      <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {userPosts &&
          userPosts.map((userPost: listingProps) => (
            <YourListingsCard key={userPost.id} post={userPost} />
          ))}
      </div>
    </>
  );
}
