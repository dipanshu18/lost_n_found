import AnswerQuestionForm from "./AnswerQuestionForm";
import Navbar from "./Navbar";

import { useState } from "react";

export default function ItemDetail() {
  const [isFound, setIsFound] = useState(false);

  return (
    <>
      <Navbar />
      {/*<!-- Component: Basic image card --> */}
      <div className="my-10 p-14 gap-10 grid lg:grid-cols-3 overflow-hidden text-slate-500">
        {/*  <!--  Image --> */}
        <figure className="lg:col-span-2">
          <img
            src="https://picsum.photos/id/69/800/600"
            alt="card image"
            className="aspect-video w-full  rounded-xl"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="lg:p-6 lg:col-span-1">
          <header className="">
            <h3 className="mb-4 text-xl font-medium text-slate-700">
              Item Name
            </h3>
            <p className="mb-4 text-sm text-slate-500">
              Item Description
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate est cupiditate ea in voluptatem nobis quidem magnam
              debitis laborum atque cum eos excepturi quia velit nemo, nam
              veniam nostrum at!
            </p>

            <p className="mb-4 font-semibold text-sm text-slate-400">
              Item lost location
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            {/*<!-- Component: Large primary basic button --> */}
            <button
              onClick={() => {
                setIsFound(true);
              }}
              className="mr-4 mb-4 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
            >
              <span>Found</span>
            </button>
            {/*<!-- End Large primary basic button --> */}
          </header>
        </div>
      </div>
      {/*<!-- End Basic image card --> */}

      {isFound && <AnswerQuestionForm />}
    </>
  );
}
