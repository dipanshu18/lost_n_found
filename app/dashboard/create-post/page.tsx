import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create lost item post",
};

export default function CreatePost() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold my-10">
            Create Post about your lost belonging...
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="item name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="item description"
                className="textarea textarea-bordered "
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Lost location</span>
              </label>
              <input
                type="text"
                placeholder="item lost location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Verification question</span>
              </label>
              <input
                type="text"
                placeholder="question for verifying your item"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
