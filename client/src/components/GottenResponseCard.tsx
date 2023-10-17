import axios from "axios";
import { useState } from "react";
import Spinner from "./Spinner";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type GottenResponseCardProps = {
  id: React.Key;
  postId: React.Key;
  validatingQuestion: string;
  answer: string;
  founder: {
    name: string;
  };
  approved: boolean;
  updatedAt: string;
};

export default function GottenResponseCard({
  response,
}: {
  response: GottenResponseCardProps;
}) {
  const [loading, setLoading] = useState(false);

  async function handleApproval() {
    try {
      const requestApprove = await axios.put(
        `/api/response/${response.id}/${response.postId}`
      );

      if (requestApprove.status === 201) {
        setLoading(false);
        toast.success("Approved the response");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      toast.error("Unexpected Error");
    }
  }

  return (
    <>
      {/*<!-- Component: Basic card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">
            {response.validatingQuestion}
          </h3>
          <p className="mb-4">{response.answer}</p>
          {/*<!-- Component: Large primary basic button --> */}
          {!response.approved && (
            <div className="text-center">
              <button
                onClick={handleApproval}
                className="mr-6 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
              >
                <span>Approve</span>
              </button>
            </div>
          )}
          {/*<!-- End Large primary basic button --> */}

          <h5 className="text-md my-6 font-medium text-gray-700">
            By <span className="text-emerald-600">{response.founder.name}</span>
          </h5>

          <p className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(response.updatedAt), {
              addSuffix: true,
            })}
          </p>

          {loading && (
            <div className="flex justify-center">
              <Spinner />
            </div>
          )}
        </div>
      </div>
      {/*<!-- End Basic card --> */}

      <ToastContainer autoClose={5000} />
    </>
  );
}
