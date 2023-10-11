import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import YourListingsCard from "../components/YourListingsCard";
import axios from "axios";
import Spinner from "../components/Spinner";

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

  console.log(userPosts);

  return (
    <>
      <Navbar />
      <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {loading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}

        {userPosts &&
          userPosts.map((userPost) => (
            <YourListingsCard key={userPost.id} post={userPost} />
          ))}
      </div>
    </>
  );
}
