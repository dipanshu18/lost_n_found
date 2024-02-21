import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

import Link from "next/link";

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold my-10">Your profile...</h1>
        </div>
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <div>Your full name</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone no</span>
              </label>

              <div>Your phone no</div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div>Your email</div>
            </div>

            <div className="form-control mt-6">
              <Link href="/update-profile/:id">
                <button className="btn btn-primary-content w-full">
                  Update
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
