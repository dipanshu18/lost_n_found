"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { signupUserSchema, signupUserType } from "@/types";

import Spinner from "./Spinner";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signupUserType>({
    reValidateMode: "onChange",
    resolver: zodResolver(signupUserSchema),
  });

  async function signupHandler(data: signupUserType) {
    const { name, phoneNo, email, password } = data;

    try {
      const request = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, phoneNo, email, password }),
      });

      if (request.ok) {
        const response = await request.json();
        toast(response?.message);

        router.push("/dashboard");
        router.refresh();
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
          <h1 className="text-3xl font-bold my-10">Signup...</h1>
        </div>
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(signupHandler)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="full name"
                className="input input-bordered"
              />
              {errors && (
                <span className="text-rose-700">{errors.name?.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Phone no{" "}
                  <strong className="text-rose-700">
                    (Please don&apos;t add +91)
                  </strong>
                </span>
              </label>
              <input
                type="text"
                {...register("phoneNo")}
                placeholder="phone no"
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
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
              />
              {errors && (
                <span className="text-rose-700">
                  {errors.password?.message}
                </span>
              )}
              <label className="label">
                <Link href="/login" className="label-text-alt">
                  Already have an account?{" "}
                  <span className="link link-hover">Login</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {isSubmitting && <Spinner />}
              <button className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
