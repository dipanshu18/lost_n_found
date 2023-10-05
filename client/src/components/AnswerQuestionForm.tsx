export default function AnswerQuestionForm() {
  return (
    <>
      {/*<!-- Component: Card with form --> */}
      <form className="max-w-xl mb-10 mx-10 md:mx-auto overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 text-center">
            <h3 className="text-xl font-semibold text-slate-700">
              Answer the question asked by the owner
            </h3>
          </header>
          <div className="flex flex-col space-y-4">
            <p className="text-md mt-8 text-slate-700">
              Question asked by the owner?
            </p>
            {/*      <!-- Input field --> */}
            <div className="relative mb-6">
              <input
                id="answer"
                type="text"
                name="answer"
                placeholder="your answer"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="answer"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your answer
              </label>
            </div>
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 ">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none">
            <span>Submit</span>
          </button>
        </div>
      </form>
      {/*<!-- End Card with form --> */}
    </>
  );
}
