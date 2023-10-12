import { useState } from "react";

export default function YourResponseCard({ response }) {
  const [responseApproved, setResponseApproved] = useState(response.approved);

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
          {responseApproved && (
            <button className="mr-6 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none">
              <span>Show contact no.</span>
            </button>
          )}
          {/*<!-- End Large primary basic button --> */}
        </div>
      </div>
      {/*<!-- End Basic card --> */}
    </>
  );
}
