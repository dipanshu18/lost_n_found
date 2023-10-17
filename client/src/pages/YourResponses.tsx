import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import YourResponseCard from "../components/YourResponseCard";
import axios from "axios";
import Spinner from "../components/Spinner";

import { ResponseProps } from "../components/YourResponseCard";

export default function YourResponses() {
  const [loading, setLoading] = useState(false);
  const [userResponses, setUserResponses] = useState([]);

  useEffect(() => {
    async function fetchUserResponses() {
      setLoading(true);
      const request = await axios.get("/api/user/responses");

      if (request.status === 200) {
        setLoading(false);
        setUserResponses(request.data);
      }
    }

    fetchUserResponses();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {loading && (
        <div className="flex  my-20 justify-center items-center">
          <Spinner />
        </div>
      )}

      <div className="mx-10 my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {userResponses &&
          userResponses.map((userResponse: ResponseProps) => (
            <YourResponseCard key={userResponse.id} response={userResponse} />
          ))}
      </div>
    </div>
  );
}
