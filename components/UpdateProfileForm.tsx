"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { hash } from "bcryptjs";

import { updateUserSchema, updateUserType, userProfileType } from "@/types";
import Spinner from "./Spinner";
import { toast } from "sonner";

export default function Profile({ user }: { user: userProfileType }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<updateUserType>({
    reValidateMode: "onChange",
    resolver: zodResolver(updateUserSchema),
  });

  async function updateUserHandler(data: updateUserType) {
    try {
      const { name, email, phoneNo, password } = data;

      if (password && password.length <= 5 && password.length > 11) {
        return toast("Password must be between 5-10 characters long");
      }

      const updatedInfo: updateUserType = {};

      if (name !== undefined) {
        updatedInfo.name = name;
      }

      if (phoneNo !== undefined) {
        updatedInfo.phoneNo = phoneNo;
      }

      if (email !== undefined) {
        updatedInfo.email = email;
      }

      if (password !== undefined) {
        const newHashedPassword = await hash(password, 10);
        updatedInfo.password = newHashedPassword;
      }

      const request = await fetch(`/api/update/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedInfo),
      });

      if (request.ok) {
        const response = await request.json();
        return toast(response.message);
      }
    } catch (e) {
      console.log(e);
    } finally {
      reset();
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold my-10">
            Update your personal info...
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(updateUserHandler)}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                type="text"
                {...register("name")}
                value={user.name}
                className="input input-bordered"
              />

              {errors && (
                <span className="text-rose-700">{errors.name?.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone no</span>
              </label>

              <input
                type="text"
                {...register("phoneNo")}
                value={user.phoneNo}
                className="input input-bordered"
              />

              {errors && (
                <span className="text-rose-700">{errors.phoneNo?.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                {...register("email")}
                value={user.email}
                className="input input-bordered"
              />

              {errors && (
                <span className="text-rose-700">{errors.email?.message}</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                className="input input-bordered"
              />

              {errors && (
                <span className="text-rose-700">
                  {errors.password?.message}
                </span>
              )}
            </div>

            {isSubmitting && <Spinner />}

            <div className="form-control mt-6">
              <div className="card-actions">
                <button type="submit" className="btn btn-primary">
                  Update Info
                </button>
                <Link href="/dashboard/profile">
                  <button className="btn btn-warning">Cancel</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
