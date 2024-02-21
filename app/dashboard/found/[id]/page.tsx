"use client";

import Image from "next/image";
import lostImage from "@/public/lost.png";
import { useState } from "react";

export default function LostItemOutsideDetails() {
  const [found, setFound] = useState(false);

  return (
    <div className="hero max-w-2xl mx-auto">
      <div className="hero-content flex-col">
        <Image src={lostImage} alt="Lost item image" />
        <div>
          <h1 className="text-3xl font-bold">Lost product name</h1>
          <p className="py-2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <h1 className="text-xl font-bold mb-4">Lost product location</h1>
          <p className="py-4">
            Found by: <strong>Finder name</strong>
          </p>
          <div className="flex gap-5">
            <button
              onClick={() => setFound(!found)}
              className={`btn ${found ? "btn-success" : "btn-primary"}`}
            >
              {found ? "Submitted your response" : "Yours ?"}
            </button>
          </div>
        </div>

        {found && (
          <div className="max-w-5xl w-full mx-auto">
            <div className="hero-content flex-col">
              <div className="text-center">
                <h1 className="text-2xl font-bold my-10">
                  Answer the validation question asked by user to verify found
                  item is correct...
                </h1>
              </div>
              <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Question by the finder ?
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="full name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button
                      onClick={() => setFound(!found)}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
