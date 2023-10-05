export default function ResponseCard() {
  return (
    <>
      {/*<!-- Component: Basic card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">
            Something to remember
          </h3>
          <p className="mb-4">
            All components can be copied and pasted and easily implemented in
            your tailwind css projects. You can choose which language you want
            to copy the desired component and just hover and click on the
            component you need and paste it on your project.
          </p>
          {/*<!-- Component: Large primary basic button --> */}
          <button className="mr-6 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none">
            <span>Approve</span>
          </button>
          {/*<!-- End Large primary basic button --> */}

          {/*<!-- Component: Large secondary basic button --> */}
          <button className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-red-50 px-6 text-sm font-medium tracking-wide text-red-500 transition duration-300 hover:bg-red-100 hover:text-red-600 focus:bg-red-200 focus:text-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-100 disabled:text-teal-400 disabled:shadow-none">
            <span>Reject</span>
          </button>
          {/*<!-- End Large secondary basic button --> */}
        </div>
      </div>
      {/*<!-- End Basic card --> */}
    </>
  );
}
